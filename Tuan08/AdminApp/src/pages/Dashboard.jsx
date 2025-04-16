import React, { useEffect, useState, useRef } from 'react';
import './Dashboard.css';
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import turnoverImg from '../assets/images/Button 1509.png';
import profitImg from '../assets/images/Button 1529.png';
import newCustomerImg from '../assets/images/Button 1530.png';
import overviewImg from '../assets/images/Squares four 1.png';
import tableImg from '../assets/images/File text 1.png';
import exportImg from '../assets/images/File text 1.png';
import importImg from '../assets/images/Move up.png';
import edit from '../assets/images/create.png';

const Dashboard = () => {
  const [turnover, setTurnover] = useState({});
  const [profit, setProfit] = useState({});
  const [newCustomer, setNewCustomer] = useState({});
  const [orders, setOrders] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [newOrder, setNewOrder] = useState({
    customerName: '',
    company: '',
    orderValue: 0,
    orderDate: '',
    status: 'New',
    avatar: ''
  });
  const tableRef = useRef(null);

  useEffect(() => {
    fetchTurnover();
    fetchProfit();
    fetchNewCustomer();
    fetchOrders();
  }, []);

  const fetchTurnover = async () => {
    try {
      const response = await fetch('http://localhost:3000/turnover');
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      setTurnover(data);
    } catch (error) {
      console.error('Error fetching turnover:', error);
    }
  };

  const fetchProfit = async () => {
    try {
      const response = await fetch('http://localhost:3000/profit');
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      setProfit(data);
    } catch (error) {
      console.error('Error fetching profit:', error);
    }
  };

  const fetchNewCustomer = async () => {
    try {
      const response = await fetch('http://localhost:3000/new_customer');
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      setNewCustomer(data);
    } catch (error) {
      console.error('Error fetching new customers:', error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:3000/orders');
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleEditClick = (order) => {
    setSelectedOrder({ ...order });
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedOrder(null);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
    setNewOrder({
      customerName: '',
      company: '',
      orderValue: 0,
      orderDate: '',
      status: 'New',
      avatar: ''
    });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedOrder((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = async () => {
    if (!selectedOrder) return;
    try {
      const response = await fetch(`http://localhost:3000/orders/${selectedOrder.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedOrder),
      });
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const updatedOrder = await response.json();
      setOrders(orders.map((order) => (order.id === updatedOrder.id ? updatedOrder : order)));
      handleCloseEditModal();
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  const handleSaveAdd = async () => {
    try {
      const response = await fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      });
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const addedOrder = await response.json();
      setOrders([...orders, addedOrder]);
      handleCloseAddModal();
    } catch (error) {
      console.error('Error adding order:', error);
    }
  };

  useEffect(() => {
    if (orders.length > 0 && tableRef.current) {
      const table = $(tableRef.current).DataTable({
        destroy: true,
        data: orders,
        columns: [
          {
            title: 'Customer Name',
            data: null,
            render: (data) =>
              `<div class="customer-info">
                 <img src="${data.avatar}" alt="${data.customerName}" class="avatar" onerror="this.src=''" />
                 <span>${data.customerName}</span>
               </div>`,
          },
          { title: 'Company', data: 'company' },
          {
            title: 'Order Value',
            data: 'orderValue',
            render: (data) => `$${data}`,
          },
          { title: 'Order Date', data: 'orderDate' },
          {
            title: 'Status',
            data: 'status',
            render: (data) =>
              `<span class="status status-${data.toLowerCase().replace(' ', '-')}">${data}</span>`,
          },
          {
            title: '',
            data: null,
            render: (data) =>
              `<button class="edit-btn" data-id="${data.id}"><img src="${edit}" alt="Edit" style="width: 25px; height: 25px"/></button>`,
            orderable: false,
            searchable: false,
          },
        ],
        pageLength: 5,
        ordering: true,
        searching: false,
        lengthChange: false,
        paging: true,
      });

      $(tableRef.current).on('click', '.edit-btn', function () {
        const id = $(this).attr('data-id');
        const order = orders.find((o) => o.id == id);
        if (order) {
          handleEditClick(order);
        }
      });

      return () => {
        table.destroy();
      };
    }
  }, [orders]);

  return (
    <>
      <div>
        <div className="title">
          <div>
            <img src={overviewImg} alt="" />
            <h2>Overview</h2>
          </div>
        </div>
        <div className="dashboards">
          <div className="dashboard dashboard-turnover">
            <div>
              <h3>Turnover</h3>
              <h1>${turnover.total || 0}</h1>
              <p>
                <span>{turnover.change || 0}%</span> period of change
              </p>
            </div>
            <div>
              <img src={turnoverImg} alt="" />
            </div>
          </div>
          <div className="dashboard dashboard-profit">
            <div>
              <h3>Profit</h3>
              <h1>${profit.total || 0}</h1>
              <p>
                <span>{profit.change || 0}%</span> period of change
              </p>
            </div>
            <div>
              <img src={profitImg} alt="" />
            </div>
          </div>
          <div className="dashboard dashboard-new-customer">
            <div>
              <h3>New Customers</h3>
              <h1>{newCustomer.total || 0}</h1>
              <p>
                <span>{newCustomer.change || 0}%</span> period of change
              </p>
            </div>
            <div>
              <img src={newCustomerImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="title">
          <div>
            <img src={tableImg} alt="" />
            <h2>Detailed report</h2>
          </div>
          <div>
            <button onClick={() => setShowAddModal(true)}>
              <img src={importImg} alt="" />
              Import
            </button>
            <button>
              <img src={exportImg} alt="" />
              Export
            </button>
          </div>
        </div>
        <div className="order-datatable-container">
          <table ref={tableRef} className="display order-datatable"></table>
        </div>
      </div>

      {showEditModal && selectedOrder && (
        <div className="custom-modal">
          <div className="custom-modal-content">
            <div className="custom-modal-header">
              <h5>Chỉnh sửa Order</h5>
              <button className="custom-modal-close" onClick={handleCloseEditModal}>
                ×
              </button>
            </div>
            <div className="custom-modal-body">
              <div className="form-group">
                <label>Tên khách hàng</label>
                <input
                  type="text"
                  name="customerName"
                  value={selectedOrder.customerName || ''}
                  onChange={handleEditInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Công ty</label>
                <input
                  type="text"
                  name="company"
                  value={selectedOrder.company || ''}
                  onChange={handleEditInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Giá trị đơn hàng</label>
                <input
                  type="number"
                  name="orderValue"
                  value={selectedOrder.orderValue || 0}
                  onChange={handleEditInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Ngày đặt hàng</label>
                <input
                  type="date"
                  name="orderDate"
                  value={selectedOrder.orderDate || ''}
                  onChange={handleEditInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Trạng thái</label>
                <select
                  name="status"
                  value={selectedOrder.status || ''}
                  onChange={handleEditInputChange}
                  className="form-control"
                  required
                >
                  <option value="New">New</option>
                  <option value="In-progress">In-progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
            <div className="custom-modal-footer">
              <button className="btn btn-secondary" onClick={handleCloseEditModal}>
                Đóng
              </button>
              <button className="btn btn-primary" onClick={handleSaveEdit}>
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddModal && (
        <div className="custom-modal">
          <div className="custom-modal-content">
            <div className="custom-modal-header">
              <h5>Thêm Order Mới</h5>
              <button className="custom-modal-close" onClick={handleCloseAddModal}>
                ×
              </button>
            </div>
            <div className="custom-modal-body">
              <div className="form-group">
                <label>Tên khách hàng</label>
                <input
                  type="text"
                  name="customerName"
                  value={newOrder.customerName}
                  onChange={handleAddInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Công ty</label>
                <input
                  type="text"
                  name="company"
                  value={newOrder.company}
                  onChange={handleAddInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Giá trị đơn hàng</label>
                <input
                  type="number"
                  name="orderValue"
                  value={newOrder.orderValue}
                  onChange={handleAddInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Ngày đặt hàng</label>
                <input
                  type="date"
                  name="orderDate"
                  value={newOrder.orderDate}
                  onChange={handleAddInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Trạng thái</label>
                <select
                  name="status"
                  value={newOrder.status}
                  onChange={handleAddInputChange}
                  className="form-control"
                  required
                >
                  <option value="New">New</option>
                  <option value="In-progress">In-progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div className="form-group">
                <label>Avatar URL (Tùy chọn)</label>
                <input
                  type="text"
                  name="avatar"
                  value={newOrder.avatar}
                  onChange={handleAddInputChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="custom-modal-footer">
              <button className="btn btn-secondary" onClick={handleCloseAddModal}>
                Đóng
              </button>
              <button className="btn btn-primary" onClick={handleSaveAdd}>
                Thêm mới
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;