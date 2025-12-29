// MembersPage.jsx
import React, { useState } from 'react';
import {
  Search, Filter, Download, Plus, User, Mail, Phone, Calendar,
  MapPin, BookOpen, Clock, CheckCircle, XCircle, MoreVertical,
  Edit2, Trash2, Eye, Star, Users, ArrowUpDown, ChevronRight
} from 'lucide-react';

const MembersPage = () => {
  // Mock data for members
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.j@email.com",
      phone: "+1 (555) 123-4567",
      memberId: "MEM-101",
      joinDate: "2023-05-15",
      membership: "Premium", // Premium, Standard, Basic
      status: "active", // active, suspended, inactive
      booksIssued: 3,
      totalBorrowed: 24,
      overdueBooks: 0,
      department: "Computer Science",
      avatarColor: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      name: "Sarah Williams",
      email: "sarah.w@email.com",
      phone: "+1 (555) 987-6543",
      memberId: "MEM-102",
      joinDate: "2023-08-22",
      membership: "Standard",
      status: "active",
      booksIssued: 1,
      totalBorrowed: 12,
      overdueBooks: 1,
      department: "Business",
      avatarColor: "from-emerald-500 to-teal-400"
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "m.chen@email.com",
      phone: "+1 (555) 456-7890",
      memberId: "MEM-103",
      joinDate: "2023-12-10",
      membership: "Premium",
      status: "suspended",
      booksIssued: 0,
      totalBorrowed: 8,
      overdueBooks: 2,
      department: "Engineering",
      avatarColor: "from-amber-500 to-orange-400"
    },
    {
      id: 4,
      name: "Emma Davis",
      email: "emma.d@email.com",
      phone: "+1 (555) 234-5678",
      memberId: "MEM-104",
      joinDate: "2024-01-05",
      membership: "Basic",
      status: "active",
      booksIssued: 2,
      totalBorrowed: 5,
      overdueBooks: 0,
      department: "Literature",
      avatarColor: "from-purple-500 to-pink-400"
    },
    {
      id: 5,
      name: "David Miller",
      email: "d.miller@email.com",
      phone: "+1 (555) 876-5432",
      memberId: "MEM-105",
      joinDate: "2023-11-30",
      membership: "Standard",
      status: "inactive",
      booksIssued: 0,
      totalBorrowed: 15,
      overdueBooks: 0,
      department: "Science",
      avatarColor: "from-rose-500 to-red-400"
    },
    {
      id: 6,
      name: "Priya Sharma",
      email: "priya.s@email.com",
      phone: "+1 (555) 345-6789",
      memberId: "MEM-106",
      joinDate: "2024-01-18",
      membership: "Premium",
      status: "active",
      booksIssued: 4,
      totalBorrowed: 7,
      overdueBooks: 0,
      department: "Medical",
      avatarColor: "from-violet-500 to-purple-400"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // all, active, suspended, inactive
  const [membershipFilter, setMembershipFilter] = useState('all'); // all, premium, standard, basic
  const [sortBy, setSortBy] = useState('name'); // name, joinDate, booksIssued

  // Filter and sort logic
  const filteredMembers = members
    .filter(member => {
      const matchesSearch = 
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.memberId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.department.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || member.status === statusFilter;
      const matchesMembership = membershipFilter === 'all' || member.membership.toLowerCase() === membershipFilter;
      
      return matchesSearch && matchesStatus && matchesMembership;
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'joinDate') return new Date(b.joinDate) - new Date(a.joinDate);
      if (sortBy === 'booksIssued') return b.booksIssued - a.booksIssued;
      return 0;
    });

  // Status badge component
  const StatusBadge = ({ status }) => {
    const config = {
      active: {
        bg: "bg-emerald-50",
        text: "text-emerald-700",
        icon: <CheckCircle size={14} />,
        label: "Active"
      },
      suspended: {
        bg: "bg-amber-50",
        text: "text-amber-700",
        icon: <Clock size={14} />,
        label: "Suspended"
      },
      inactive: {
        bg: "bg-slate-100",
        text: "text-slate-600",
        icon: <XCircle size={14} />,
        label: "Inactive"
      }
    };
    
    const { bg, text, icon, label } = config[status];
    
    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${bg} ${text}`}>
        {icon}
        {label}
      </span>
    );
  };

  // Membership badge component
  const MembershipBadge = ({ membership }) => {
    const config = {
      premium: {
        bg: "bg-gradient-to-r from-amber-50 to-yellow-50",
        text: "text-amber-700",
        border: "border border-amber-200",
        icon: <Star size={12} />,
        label: "Premium"
      },
      standard: {
        bg: "bg-indigo-50",
        text: "text-indigo-700",
        border: "border border-indigo-200",
        icon: <User size={12} />,
        label: "Standard"
      },
      basic: {
        bg: "bg-slate-100",
        text: "text-slate-600",
        border: "border border-slate-200",
        icon: <User size={12} />,
        label: "Basic"
      }
    };
    
    const { bg, text, border, icon, label } = config[membership.toLowerCase()];
    
    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${bg} ${text} ${border}`}>
        {icon}
        {label}
      </span>
    );
  };

  // Action handlers
  const handleEditMember = (memberId) => {
    console.log(`Edit member: ${memberId}`);
    // Open edit modal
  };

  const handleDeleteMember = (memberId) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      setMembers(prev => prev.filter(member => member.id !== memberId));
    }
  };

  const handleSuspendMember = (memberId) => {
    setMembers(prev => prev.map(member => 
      member.id === memberId 
        ? { ...member, status: member.status === 'suspended' ? 'active' : 'suspended' }
        : member
    ));
  };

  // Stats calculation
  const stats = {
    total: members.length,
    active: members.filter(m => m.status === 'active').length,
    premium: members.filter(m => m.membership === 'Premium').length,
    overdue: members.reduce((sum, member) => sum + member.overdueBooks, 0),
    activeBooks: members.reduce((sum, member) => sum + member.booksIssued, 0)
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Members Management</h1>
          <p className="text-slate-600 mt-2">Manage library members, track activity, and oversee memberships</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors">
            <Download size={18} />
            <span className="font-medium">Export List</span>
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:opacity-90 transition-all shadow-lg shadow-indigo-200">
            <Plus size={18} />
            <span className="font-medium">Add New Member</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">Total Members</p>
              <p className="text-2xl font-bold text-slate-800 mt-2">{stats.total}</p>
            </div>
            <div className="p-3 rounded-lg bg-indigo-50">
              <Users className="text-indigo-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">Active Members</p>
              <p className="text-2xl font-bold text-emerald-600 mt-2">{stats.active}</p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50">
              <CheckCircle className="text-emerald-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">Premium Members</p>
              <p className="text-2xl font-bold text-amber-600 mt-2">{stats.premium}</p>
            </div>
            <div className="p-3 rounded-lg bg-amber-50">
              <Star className="text-amber-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">Books Issued</p>
              <p className="text-2xl font-bold text-blue-600 mt-2">{stats.activeBooks}</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50">
              <BookOpen className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">Overdue Books</p>
              <p className="text-2xl font-bold text-rose-600 mt-2">{stats.overdue}</p>
            </div>
            <div className="p-3 rounded-lg bg-rose-50">
              <Clock className="text-rose-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Search Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search by name, email, department, or member ID..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl">
              <Filter size={18} className="text-slate-500" />
              <select 
                className="bg-transparent focus:outline-none text-slate-700 font-medium"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl">
              <User size={18} className="text-slate-500" />
              <select 
                className="bg-transparent focus:outline-none text-slate-700 font-medium"
                value={membershipFilter}
                onChange={(e) => setMembershipFilter(e.target.value)}
              >
                <option value="all">All Memberships</option>
                <option value="premium">Premium</option>
                <option value="standard">Standard</option>
                <option value="basic">Basic</option>
              </select>
            </div>

            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl">
              <ArrowUpDown size={18} className="text-slate-500" />
              <select 
                className="bg-transparent focus:outline-none text-slate-700 font-medium"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Sort by Name</option>
                <option value="joinDate">Sort by Join Date</option>
                <option value="booksIssued">Sort by Books Issued</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Members Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-slate-700">Member</th>
                <th className="text-left py-4 px-6 font-semibold text-slate-700">Contact</th>
                <th className="text-left py-4 px-6 font-semibold text-slate-700">Membership</th>
                <th className="text-left py-4 px-6 font-semibold text-slate-700">Activity</th>
                <th className="text-left py-4 px-6 font-semibold text-slate-700">Status</th>
                <th className="text-left py-4 px-6 font-semibold text-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredMembers.map((member) => (
                <tr key={member.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${member.avatarColor} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{member.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-sm text-slate-600">ID: {member.memberId}</p>
                          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                          <p className="text-sm text-slate-600">{member.department}</p>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                          <Calendar size={12} />
                          Joined {member.joinDate}
                        </div>
                      </div>
                    </div>
                  </td>
                  
                  <td className="py-4 px-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail size={14} className="text-slate-400" />
                        <span className="text-sm text-slate-700">{member.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={14} className="text-slate-400" />
                        <span className="text-sm text-slate-700">{member.phone}</span>
                      </div>
                    </div>
                  </td>
                  
                  <td className="py-4 px-6">
                    <div className="space-y-3">
                      <MembershipBadge membership={member.membership} />
                      <div className="text-xs text-slate-500">
                        Since {member.joinDate}
                      </div>
                    </div>
                  </td>
                  
                  <td className="py-4 px-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Issued Now:</span>
                        <span className="font-medium text-slate-800">{member.booksIssued}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Total Borrowed:</span>
                        <span className="font-medium text-slate-800">{member.totalBorrowed}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Overdue:</span>
                        <span className={`font-medium ${member.overdueBooks > 0 ? 'text-rose-600' : 'text-slate-800'}`}>
                          {member.overdueBooks}
                        </span>
                      </div>
                    </div>
                  </td>
                  
                  <td className="py-4 px-6">
                    <StatusBadge status={member.status} />
                  </td>
                  
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleEditMember(member.id)}
                        className="p-2 hover:bg-indigo-50 text-indigo-600 rounded-lg transition-colors"
                        title="Edit Member"
                      >
                        <Edit2 size={18} />
                      </button>
                      
                      <button 
                        onClick={() => handleSuspendMember(member.id)}
                        className={`p-2 rounded-lg transition-colors ${member.status === 'suspended' ? 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100' : 'bg-amber-50 text-amber-600 hover:bg-amber-100'}`}
                        title={member.status === 'suspended' ? 'Activate Member' : 'Suspend Member'}
                      >
                        {member.status === 'suspended' ? <CheckCircle size={18} /> : <Clock size={18} />}
                      </button>
                      
                      <button 
                        onClick={() => handleDeleteMember(member.id)}
                        className="p-2 hover:bg-rose-50 text-rose-600 rounded-lg transition-colors"
                        title="Delete Member"
                      >
                        <Trash2 size={18} />
                      </button>
                      
                      <button className="p-2 hover:bg-slate-100 text-slate-600 rounded-lg transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredMembers.length === 0 && (
          <div className="py-12 text-center">
            <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <Users size={24} className="text-slate-400" />
            </div>
            <p className="text-slate-500 font-medium">No members found</p>
            <p className="text-slate-400 text-sm mt-1">Try adjusting your search or filter</p>
          </div>
        )}

        {/* Table Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50">
          <p className="text-sm text-slate-600 mb-2 sm:mb-0">
            Showing <span className="font-medium">{filteredMembers.length}</span> of <span className="font-medium">{members.length}</span> members
          </p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50">
              Previous
            </button>
            <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
              1
            </button>
            <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50">
              2
            </button>
            <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6">
          <h3 className="font-semibold text-slate-800 mb-4">Top Borrowers</h3>
          <div className="space-y-4">
            {members
              .sort((a, b) => b.totalBorrowed - a.totalBorrowed)
              .slice(0, 3)
              .map(member => (
                <div key={member.id} className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${member.avatarColor} rounded-full flex items-center justify-center text-white font-medium`}>
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">{member.name}</p>
                      <p className="text-sm text-slate-600">{member.totalBorrowed} books</p>
                    </div>
                  </div>
                  <MembershipBadge membership={member.membership} />
                </div>
              ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-6">
          <h3 className="font-semibold text-slate-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="flex items-center justify-between p-4 bg-white rounded-xl hover:bg-slate-50 transition-colors border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-50 rounded-lg">
                  <CheckCircle size={20} className="text-emerald-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-slate-800">Send Renewal Reminders</p>
                  <p className="text-sm text-slate-500">3 memberships expiring soon</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </button>

            <button className="flex items-center justify-between p-4 bg-white rounded-xl hover:bg-slate-50 transition-colors border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-rose-50 rounded-lg">
                  <Clock size={20} className="text-rose-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-slate-800">Overdue Notifications</p>
                  <p className="text-sm text-slate-500">{stats.overdue} books overdue</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </button>

            <button className="flex items-center justify-between p-4 bg-white rounded-xl hover:bg-slate-50 transition-colors border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-50 rounded-lg">
                  <Star size={20} className="text-amber-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-slate-800">Upgrade Memberships</p>
                  <p className="text-sm text-slate-500">Offer premium features</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </button>

            <button className="flex items-center justify-between p-4 bg-white rounded-xl hover:bg-slate-50 transition-colors border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Download size={20} className="text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-slate-800">Generate Reports</p>
                  <p className="text-sm text-slate-500">Monthly activity reports</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;