// IssuedBooksPage.jsx - Clean Version
import React, { useState } from 'react';
import { 
  Search, Plus, Eye, CheckCircle, 
  AlertCircle, Clock, Calendar, User,
  ArrowUpDown, Filter, RotateCcw
} from 'lucide-react';

const IssuedBooksPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('dueDate');

  // Clean data structure
  const transactions = [
    {
      id: 1,
      book: { 
        title: "Atomic Habits", 
        author: "James Clear", 
        id: "BK-001",
        color: "from-blue-400 to-cyan-300"
      },
      member: { 
        name: "Alex Johnson", 
        id: "MEM-101",
        avatar: "AJ"
      },
      issuedDate: "2024-01-15",
      dueDate: "2024-01-30",
      status: "active",
      daysLeft: 5
    },
    {
      id: 2,
      book: { 
        title: "Deep Work", 
        author: "Cal Newport", 
        id: "BK-003",
        color: "from-emerald-400 to-green-300"
      },
      member: { 
        name: "Michael Chen", 
        id: "MEM-103",
        avatar: "MC"
      },
      issuedDate: "2024-01-05",
      dueDate: "2024-01-20",
      status: "overdue",
      daysLeft: -5
    },
    {
      id: 3,
      book: { 
        title: "The Psychology of Money", 
        author: "Morgan Housel", 
        id: "BK-002",
        color: "from-purple-400 to-pink-300"
      },
      member: { 
        name: "Sarah Williams", 
        id: "MEM-102",
        avatar: "SW"
      },
      issuedDate: "2024-01-10",
      dueDate: "2024-01-25",
      status: "returned",
      daysLeft: 0
    },
    {
      id: 4,
      book: { 
        title: "Thinking, Fast and Slow", 
        author: "Daniel Kahneman", 
        id: "BK-004",
        color: "from-amber-400 to-orange-300"
      },
      member: { 
        name: "Emma Davis", 
        id: "MEM-104",
        avatar: "ED"
      },
      issuedDate: "2024-01-18",
      dueDate: "2024-02-02",
      status: "active",
      daysLeft: 8
    },
    {
      id: 5,
      book: { 
        title: "The Alchemist", 
        author: "Paulo Coelho", 
        id: "BK-005",
        color: "from-rose-400 to-red-300"
      },
      member: { 
        name: "David Miller", 
        id: "MEM-105",
        avatar: "DM"
      },
      issuedDate: "2024-01-01",
      dueDate: "2024-01-16",
      status: "overdue",
      daysLeft: -9
    }
  ];

  // Status configuration
  const statusConfig = {
    active: {
      label: "Active",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border border-emerald-200",
      icon: CheckCircle
    },
    overdue: {
      label: "Overdue",
      bg: "bg-rose-50",
      text: "text-rose-700",
      border: "border border-rose-200",
      icon: AlertCircle
    },
    returned: {
      label: "Returned",
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border border-blue-200",
      icon: CheckCircle
    }
  };

  // Filter and sort
  const filteredTransactions = transactions
    .filter(t => {
      const matchesSearch = 
        t.book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.book.id.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesFilter = statusFilter === 'all' || t.status === statusFilter;
      
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      if (sortBy === 'dueDate') return new Date(a.dueDate) - new Date(b.dueDate);
      if (sortBy === 'issuedDate') return new Date(b.issuedDate) - new Date(a.issuedDate);
      if (sortBy === 'title') return a.book.title.localeCompare(b.book.title);
      return 0;
    });

  // Format date for display
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-6">
      {/* Clean Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Issued Books</h1>
          <p className="text-slate-600 mt-1">Manage library transactions</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <Plus size={18} />
          <span className="font-medium">Issue Book</span>
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search books or members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-3 rounded-lg">
              <Filter size={18} className="text-slate-500" />
              <select 
                className="bg-transparent focus:outline-none text-slate-700 font-medium"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="overdue">Overdue</option>
                <option value="returned">Returned</option>
              </select>
            </div>

            <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-3 rounded-lg">
              <ArrowUpDown size={18} className="text-slate-500" />
              <select 
                className="bg-transparent focus:outline-none text-slate-700 font-medium"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="dueDate">Due Date</option>
                <option value="issuedDate">Issue Date</option>
                <option value="title">Book Title</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions List */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        {/* Table Header */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
          <div className="grid grid-cols-12 gap-4 text-sm font-medium text-slate-700">
            <div className="col-span-4">Book & Member</div>
            <div className="col-span-2">Issued</div>
            <div className="col-span-2">Due Date</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>
        </div>

        {/* Transactions */}
        <div className="divide-y divide-slate-100">
          {filteredTransactions.map((transaction) => {
            const StatusIcon = statusConfig[transaction.status].icon;
            const daysLeft = transaction.daysLeft;
            
            return (
              <div 
                key={transaction.id}
                className="px-6 py-4 hover:bg-slate-50 transition-colors"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Book & Member */}
                  <div className="col-span-4">
                    <div className="flex items-center gap-3">
                      {/* Book Cover */}
                      <div className={`w-12 h-16 ${transaction.book.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                        {transaction.book.title.charAt(0)}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900">
                          {transaction.book.title}
                        </h3>
                        <p className="text-sm text-slate-600 mt-1">
                          {transaction.book.author}
                        </p>
                        
                        {/* Member */}
                        <div className="flex items-center gap-2 mt-2">
                          <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-xs font-medium text-slate-700">
                            {transaction.member.avatar}
                          </div>
                          <div>
                            <span className="text-sm text-slate-700">{transaction.member.name}</span>
                            <span className="text-xs text-slate-500 ml-2">ID: {transaction.member.id}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Issued Date */}
                  <div className="col-span-2">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-slate-400" />
                      <span className="text-slate-700">{formatDate(transaction.issuedDate)}</span>
                    </div>
                  </div>

                  {/* Due Date */}
                  <div className="col-span-2">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className={transaction.status === 'overdue' ? 'text-rose-400' : 'text-slate-400'} />
                      <span className={`font-medium ${transaction.status === 'overdue' ? 'text-rose-600' : 'text-slate-700'}`}>
                        {formatDate(transaction.dueDate)}
                      </span>
                    </div>
                    {transaction.status === 'active' && daysLeft > 0 && (
                      <p className="text-xs text-slate-500 mt-1">{daysLeft} days left</p>
                    )}
                  </div>

                  {/* Status */}
                  <div className="col-span-2">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${statusConfig[transaction.status].bg} ${statusConfig[transaction.status].text} ${statusConfig[transaction.status].border}`}>
                      <StatusIcon size={14} />
                      {statusConfig[transaction.status].label}
                      {transaction.status === 'overdue' && (
                        <span className="ml-1">({Math.abs(daysLeft)}d)</span>
                      )}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="col-span-2 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <Eye size={18} />
                      </button>
                      
                      {transaction.status === 'active' && (
                        <>
                          <button 
                            className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                            title="Mark Returned"
                          >
                            <CheckCircle size={18} />
                          </button>
                          <button 
                            className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                            title="Renew"
                          >
                            <RotateCcw size={18} />
                          </button>
                        </>
                      )}
                      
                      {transaction.status === 'overdue' && (
                        <button 
                          className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                          title="Return with Fine"
                        >
                          <AlertCircle size={18} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredTransactions.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <AlertCircle size={24} className="text-slate-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-700">No transactions found</h3>
            <p className="text-slate-500 mt-1">Try adjusting your search or filter</p>
          </div>
        )}
      </div>

      {/* Simple Footer */}
      <div className="flex items-center justify-between text-sm text-slate-600">
        <div>
          Showing <span className="font-medium">{filteredTransactions.length}</span> of{' '}
          <span className="font-medium">{transactions.length}</span> transactions
        </div>
        <div className="flex items-center gap-4">
          <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            Previous
          </button>
          <span className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg">1</span>
          <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            2
          </button>
          <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default IssuedBooksPage;