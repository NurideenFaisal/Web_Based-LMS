import React, { useState } from 'react'
import { Search, Plus, Edit2, Trash2, Eye, Mail, ArrowUpDown, Users, UserCheck, UserPlus, AlertCircle } from 'lucide-react'

const MembersPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortColumn, setSortColumn] = useState(null)
  const [sortDirection, setSortDirection] = useState('asc')

  const stats = [
    { label: 'Total Members', value: '3,847', change: '+12%', icon: Users, color: 'bg-blue-500' },
    { label: 'Active Members', value: '3,654', change: '+8%', icon: UserCheck, color: 'bg-green-500' },
    { label: 'New This Month', value: '127', change: '+23%', icon: UserPlus, color: 'bg-cyan-500' },
    { label: 'With Overdue', value: '38', change: '-5%', icon: AlertCircle, color: 'bg-orange-500' }
  ]

  const members = [
    {
      id: 1,
      memberId: 'M001',
      name: 'John Anderson',
      email: 'john.anderson@email.com',
      phone: '+1 234-567-8901',
      memberType: 'Student',
      joinDate: '2023-01-15',
      status: 'Active',
      booksBorrowed: 3,
      expiryDate: '2024-12-31'
    },
    {
      id: 2,
      memberId: 'M002',
      name: 'Sarah Williams',
      email: 'sarah.williams@email.com',
      phone: '+1 234-567-8902',
      memberType: 'Faculty',
      joinDate: '2022-08-20',
      status: 'Active',
      booksBorrowed: 5,
      expiryDate: '2025-08-20'
    },
    {
      id: 3,
      memberId: 'M003',
      name: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      phone: '+1 234-567-8903',
      memberType: 'Public',
      joinDate: '2023-05-10',
      status: 'Active',
      booksBorrowed: 2,
      expiryDate: '2024-05-10'
    },
    {
      id: 4,
      memberId: 'M004',
      name: 'Emily Davis',
      email: 'emily.davis@email.com',
      phone: '+1 234-567-8904',
      memberType: 'Student',
      joinDate: '2023-09-01',
      status: 'Inactive',
      booksBorrowed: 0,
      expiryDate: '2024-01-15'
    },
    {
      id: 5,
      memberId: 'M005',
      name: 'Robert Brown',
      email: 'robert.brown@email.com',
      phone: '+1 234-567-8905',
      memberType: 'Faculty',
      joinDate: '2021-03-12',
      status: 'Active',
      booksBorrowed: 7,
      expiryDate: '2026-03-12'
    }
  ]

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  const getMemberTypeColor = (type) => {
    const colors = {
      'Student': 'bg-blue-100 text-blue-700',
      'Faculty': 'bg-purple-100 text-purple-700',
      'Public': 'bg-cyan-100 text-cyan-700'
    }
    return colors[type] || 'bg-gray-100 text-gray-700'
  }

  const getStatusColor = (status) => {
    const colors = {
      'Active': 'bg-green-100 text-green-700',
      'Inactive': 'bg-red-100 text-red-700',
      'Suspended': 'bg-orange-100 text-orange-700'
    }
    return colors[status] || 'bg-gray-100 text-gray-700'
  }

  return (
    <div>
      {/* Header Section with Stats */}
      <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl p-8 mb-8 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>
        
        <div className="relative z-10">
          {/* Top Section */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">Members Management 👥</h1>
              <p className="text-blue-100 mb-4">Manage your library members and their accounts</p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
                <Plus size={20} />
                <span>Add New Member</span>
              </button>
            </div>
            <div className="text-8xl opacity-20">👤</div>
          </div>

          {/* Stats Grid Inside */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white/30 w-10 h-10 rounded-lg flex items-center justify-center">
                    <stat.icon size={20} />
                  </div>
                  <span className="text-xs font-semibold bg-white/30 px-2 py-1 rounded-full">{stat.change}</span>
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-blue-100 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search by name, email, phone, or member ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <select className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
            <option>All Types</option>
            <option>Student</option>
            <option>Faculty</option>
            <option>Public</option>
          </select>
          <select className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Suspended</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
                <th className="text-left py-4 px-6 font-semibold">
                  <button onClick={() => handleSort('memberId')} className="flex items-center gap-2 hover:text-blue-100 transition-colors">
                    Member ID
                    <ArrowUpDown size={16} />
                  </button>
                </th>
                <th className="text-left py-4 px-6 font-semibold">
                  <button onClick={() => handleSort('name')} className="flex items-center gap-2 hover:text-blue-100 transition-colors">
                    Name
                    <ArrowUpDown size={16} />
                  </button>
                </th>
                <th className="text-left py-4 px-6 font-semibold">
                  <button onClick={() => handleSort('email')} className="flex items-center gap-2 hover:text-blue-100 transition-colors">
                    Email
                    <ArrowUpDown size={16} />
                  </button>
                </th>
                <th className="text-left py-4 px-6 font-semibold">
                  <button onClick={() => handleSort('phone')} className="flex items-center gap-2 hover:text-blue-100 transition-colors">
                    Phone
                    <ArrowUpDown size={16} />
                  </button>
                </th>
                <th className="text-left py-4 px-6 font-semibold">
                  <button onClick={() => handleSort('memberType')} className="flex items-center gap-2 hover:text-blue-100 transition-colors">
                    Type
                    <ArrowUpDown size={16} />
                  </button>
                </th>
                <th className="text-left py-4 px-6 font-semibold">
                  <button onClick={() => handleSort('joinDate')} className="flex items-center gap-2 hover:text-blue-100 transition-colors">
                    Join Date
                    <ArrowUpDown size={16} />
                  </button>
                </th>
                <th className="text-center py-4 px-6 font-semibold">
                  <button onClick={() => handleSort('booksBorrowed')} className="flex items-center gap-2 hover:text-blue-100 transition-colors mx-auto">
                    Borrowed
                    <ArrowUpDown size={16} />
                  </button>
                </th>
                <th className="text-left py-4 px-6 font-semibold">
                  <button onClick={() => handleSort('expiryDate')} className="flex items-center gap-2 hover:text-blue-100 transition-colors">
                    Expiry
                    <ArrowUpDown size={16} />
                  </button>
                </th>
                <th className="text-center py-4 px-6 font-semibold">Status</th>
                <th className="text-center py-4 px-6 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr 
                  key={member.id} 
                  className={`border-b border-slate-100 transition-all hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                  }`}
                >
                  <td className="py-5 px-6">
                    <div className="w-14 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md text-sm">
                      {member.memberId}
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <div className="font-bold text-slate-800 text-base">{member.name}</div>
                  </td>
                  <td className="py-5 px-6">
                    <div className="text-slate-600 text-sm">{member.email}</div>
                  </td>
                  <td className="py-5 px-6 text-slate-700 font-medium text-sm">{member.phone}</td>
                  <td className="py-5 px-6">
                    <span className={`px-3 py-1.5 rounded-lg text-sm font-medium ${getMemberTypeColor(member.memberType)}`}>
                      {member.memberType}
                    </span>
                  </td>
                  <td className="py-5 px-6 text-slate-700 text-sm">{member.joinDate}</td>
                  <td className="py-5 px-6 text-center">
                    <span className={`text-lg font-bold ${member.booksBorrowed > 0 ? 'text-blue-600' : 'text-slate-400'}`}>
                      {member.booksBorrowed}
                    </span>
                  </td>
                  <td className="py-5 px-6 text-slate-700 text-sm">{member.expiryDate}</td>
                  <td className="py-5 px-6 text-center">
                    <span className={`px-4 py-2 rounded-xl text-sm font-semibold inline-block ${getStatusColor(member.status)}`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg transition-all transform hover:-translate-y-0.5 hover:shadow-lg">
                        <Eye size={16} />
                      </button>
                      <button className="p-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-lg transition-all transform hover:-translate-y-0.5 hover:shadow-lg">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white rounded-lg transition-all transform hover:-translate-y-0.5 hover:shadow-lg">
                        <Mail size={16} />
                      </button>
                      <button className="p-2.5 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg transition-all transform hover:-translate-y-0.5 hover:shadow-lg">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-8 flex items-center justify-between bg-white rounded-2xl shadow-lg p-6">
        <div className="text-sm text-slate-600">
          Showing <span className="font-semibold text-blue-600">1-5</span> of <span className="font-semibold text-blue-600">3,847</span> members
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-all text-sm font-medium text-slate-700 hover:shadow-md">
            Previous
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-sm font-medium">
            1
          </button>
          <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-all text-sm font-medium text-slate-700 hover:shadow-md">
            2
          </button>
          <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-all text-sm font-medium text-slate-700 hover:shadow-md">
            3
          </button>
          <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-all text-sm font-medium text-slate-700 hover:shadow-md">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default MembersPage