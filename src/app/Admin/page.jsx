"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Mock data (faqat dizayn uchun)
const stats = [
  { label: 'Total Revenue', value: '$45,231.89', change: '+20.1%', icon: '💰', color: 'emerald' },
  { label: 'Total Orders', value: '1,234', change: '+15.3%', icon: '📦', color: 'blue' },
  { label: 'Total Products', value: '89', change: '+3.2%', icon: '🥬', color: 'purple' },
  { label: 'Active Users', value: '2,345', change: '+8.7%', icon: '👥', color: 'orange' },
];

const recentOrders = [
  { id: '#ORD-001', customer: 'John Doe', product: 'Organic Tomatoes', amount: '$45.00', status: 'Completed', date: '2 min ago' },
  { id: '#ORD-002', customer: 'Jane Smith', product: 'Fresh Cucumbers', amount: '$32.50', status: 'Processing', date: '15 min ago' },
  { id: '#ORD-003', customer: 'Mike Johnson', product: 'Carrots Bundle', amount: '$28.00', status: 'Pending', date: '1 hour ago' },
  { id: '#ORD-004', customer: 'Sarah Williams', product: 'Bell Peppers', amount: '$67.20', status: 'Completed', date: '2 hours ago' },
  { id: '#ORD-005', customer: 'David Brown', product: 'Broccoli', amount: '$54.00', status: 'Shipped', date: '3 hours ago' },
];

const topProducts = [
  { name: 'Organic Tomatoes', sales: 234, revenue: '$1,234', img: '/tomato.png' },
  { name: 'Fresh Cucumbers', sales: 189, revenue: '$945', img: '/cucumber.png' },
  { name: 'Carrots Bundle', sales: 156, revenue: '$780', img: '/carrot.png' },
  { name: 'Bell Peppers', sales: 142, revenue: '$710', img: '/pepper.png' },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'products', label: 'Products', icon: '🥬' },
    { id: 'orders', label: 'Orders', icon: '📦' },
    { id: 'customers', label: 'Customers', icon: '' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">🌿</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">FoodShop</h1>
              <p className="text-xs text-gray-500">Admin Panel</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50">
            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
              <span className="text-emerald-700 font-bold">A</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">Admin User</p>
              <p className="text-xs text-gray-500 truncate">admin@foodshop.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
              <p className="text-sm text-gray-500">Welcome back, Admin! 👋</p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 px-4 py-2 pl-10 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Notifications */}
              <button className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Add Product Button */}
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 active:scale-95 shadow-lg shadow-emerald-200/50 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Product
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${stat.color}-50 rounded-xl flex items-center justify-center text-2xl`}>
                    {stat.icon}
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-sm text-gray-500 mb-1">{stat.label}</h3>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Charts & Recent Orders */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Revenue Chart Placeholder */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Revenue Overview</h3>
                  <p className="text-sm text-gray-500">Monthly revenue statistics</p>
                </div>
                <select className="px-4 py-2 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-emerald-500 outline-none">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 3 months</option>
                </select>
              </div>
              
              {/* Chart Placeholder */}
              <div className="h-64 bg-gradient-to-br from-emerald-50 to-white rounded-xl flex items-center justify-center border-2 border-dashed border-emerald-200">
                <div className="text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="text-sm text-gray-500">Revenue Chart</p>
                  <p className="text-xs text-gray-400 mt-1">Integrate with Chart.js or Recharts</p>
                </div>
              </div>
            </div>

            {/* Top Products */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Top Products</h3>
                <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">View All</button>
              </div>
              
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                      🥬
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.sales} sales</p>
                    </div>
                    <p className="text-sm font-bold text-emerald-600">{product.revenue}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Recent Orders</h3>
                  <p className="text-sm text-gray-500">Latest customer orders</p>
                </div>
                <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">View All Orders</button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Order ID</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recentOrders.map((order, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{order.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.customer}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.product}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{order.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                          order.status === 'Completed' ? 'bg-emerald-50 text-emerald-700' :
                          order.status === 'Processing' ? 'bg-blue-50 text-blue-700' :
                          order.status === 'Pending' ? 'bg-yellow-50 text-yellow-700' :
                          'bg-purple-50 text-purple-700'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}