// IssuedBooksPage.jsx
import React, { useState } from 'react';
import { 
  Search, Filter, Download, Eye, Clock, 
  AlertCircle, CheckCircle, XCircle, 
  MoreVertical, Calendar, User, Book, 
  ArrowUpDown, ChevronRight, ExternalLink 
} from 'lucide-react';

const IssuedBooksPage = () => {
  // Mock data for issued books
  const [issuedBooks, setIssuedBooks] = useState([
    {
      id: 1,
      bookTitle: "Atomic Habits",
      bookAuthor: "James Clear",
      bookId: "BK-001",
      memberName: "Alex Johnson",
      memberId: "MEM-101",
      issuedDate: "2024-01-15",
      dueDate: "2024-01-30",
      returnDate: null,
      status: "active", // active, returned, overdue
      overdueDays: 0,
      coverColor: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      bookTitle: "The Psychology of Money",
      bookAuthor: "Morgan Housel",
      bookId: "BK-002",
      memberName: "Sarah Williams",
      memberId: "MEM-102",
      issuedDate: "2024-01-10",
      dueDate: "2024-01-25",
      returnDate: "2024-01-20",
      status: "returned",
      overdueDays: 0,
      coverColor: "from-emerald-500 to-teal-400"
    },
    {
      id: 3,
      bookTitle: "Deep Work",
      bookAuthor: "Cal Newport",
      bookId: "BK-003",
      memberName: "Michael Chen",
      memberId: "MEM-103",
      issuedDate: "2024-01-05",
      dueDate: "2024-01-20",
      returnDate: null,
      status: "overdue",
      overdueDays: 5,
      coverColor: "from-amber-500 to-orange-400"
    },
    {
      id: 4,
      bookTitle: "Thinking, Fast and Slow",
      bookAuthor: "Daniel Kahneman",
      bookId: "BK-004",
      memberName: "Emma Davis",
      memberId: "MEM-104",
      issuedDate: "2024-01-18",
      dueDate: "2024-02-02",
      returnDate: null,
      status: "active",
      overdueDays: 0,
      coverColor: "from-purple-500 to-pink-400"
    },
    {
      id: 5,
      bookTitle: "The Alchemist",
      bookAuthor: "Paulo Coelho",
      bookId: "BK-005",
      memberName: "David Miller",
      memberId: "MEM-105",
      issuedDate: "2024-01-01",
      dueDate: "2024-01-16",
      returnDate: null,
      status: "overdue",
      overdueDays: 9,
      coverColor: "from-rose-500 to-red-400"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // all, active, overdue, returned
  const [sortBy, setSortBy] = useState('dueDate'); // dueDate, issuedDate, title

  // Filter and sort logic
  const filteredBooks = issuedBooks
    .filter(book => {
      const matchesSearch = 
        book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.bookId.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilter = statusFilter === 'all' || book.status === statusFilter;
      
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      if (sortBy === 'dueDate') return new Date(a.dueDate) - new Date(b.dueDate);
      if (sortBy === 'issuedDate') return new Date(b.issuedDate) - new Date(a.issuedDate);
      return a.bookTitle.localeCompare(b.bookTitle);
    });

  // Status badge component
  const StatusBadge = ({ status, overdueDays }) => {
    const config = {
      active: {
        bg: "bg-emerald-50",
        text: "text-emerald-700",
        icon: <CheckCircle size={14} />,
        label: "Active"
      },
      overdue: {
        bg: "bg-rose-50",
        text: "text-rose-700",
        icon: <AlertCircle size={14} />,
        label: `Overdue (${overdueDays} days)`
      },
      returned: {
        bg: "bg-slate-100",
        text: "text-slate-600",
        icon: <CheckCircle size={14} />,
        label: "Returned"
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

  // Action handlers
  const handleReturnBook = (bookId) => {
    console.log(`Return book: ${bookId}`);
    // Update status to returned
    setIssuedBooks(prev => prev.map(book => 
      book.id === bookId 
        ? { ...book, status: 'returned', returnDate: new Date().toISOString().split('T')[0] }
        : book
    ));
  };

  const handleRenewBook = (bookId) => {
    console.log(`Renew book: ${bookId}`);
    // Extend due date by 14 days
    setIssuedBooks(prev => prev.map(book => 
      book.id === bookId 
        ? { ...book, dueDate: new Date(new Date(book.dueDate).getTime() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] }
        : book
    ));
  };

  // Stats calculation
  const stats = {
    totalIssued: issuedBooks.length,
    active: issuedBooks.filter(b => b.status === 'active').length,
    overdue: issuedBooks.filter(b => b.status === 'overdue').length,
    returned: issuedBooks.filter(b => b.status === 'returned').length
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Issued Books</h1>
          <p className="text-slate-600 mt-2">Track and manage all book transactions</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors">
            <Download size={18} />
            <span className="font-medium">Export</span>
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:opacity-90 transition-all shadow-lg shadow-indigo-200">
            <Book size={18} />
            <span className="font-medium">Issue New Book</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">Total Issued</p>
              <p className="text-2xl font-bold text-slate-800 mt-2">{stats.totalIssued}</p>
            </div>
            <div className="p-3 rounded-lg bg-indigo-50">
              <Book className="text-indigo-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">Active</p>
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
              <p className="text-slate-500 text-sm">Overdue</p>
              <p className="text-2xl font-bold text-rose-600 mt-2">{stats.overdue}</p>
            </div>
            <div className="p-3 rounded-lg bg-rose-50">
              <AlertCircle className="text-rose-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">Returned</p>
              <p className="text-2xl font-bold text-slate-600 mt-2">{stats.returned}</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-100">
              <CheckCircle className="text-slate-500" size={24} />
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
                placeholder="Search by book title, member name, or ID..."
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
                <option value="overdue">Overdue</option>
                <option value="returned">Returned</option>
              </select>
            </div>

            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl">
              <ArrowUpDown size={18} className="text-slate-500" />
              <select 
                className="bg-transparent focus:outline-none text-slate-700 font-medium"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="dueDate">Sort by Due Date</option>
                <option value="issuedDate">Sort by Issue Date</option>
                <option value="title">Sort by Book Title</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Issued Books Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-slate-700">Book Details</th>
                <th className="text-left py-4 px-6 font-semibold text-slate-700">Member</th>
                <th className="text-left py-4 px-6 font-semibold text-slate-700">Dates</th>
                <th className="text-left py-4 px-6 font-semibold text-slate-700">Status</th>
                <th className="text-left py-4 px-6 font-semibold text-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredBooks.map((book) => (
                <tr key={book.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-16 ${book.coverColor} rounded-lg shadow-sm flex items-center justify-center text-white font-bold`}>
                        {book.bookTitle.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{book.bookTitle}</p>
                        <p className="text-sm text-slate-600">{book.bookAuthor}</p>
                        <p className="text-xs text-slate-500 mt-1">ID: {book.bookId}</p>
                      </div>
                    </div>
                  </td>
                  
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full flex items-center justify-center text-white font-medium">
                        {book.memberName.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">{book.memberName}</p>
                        <p className="text-sm text-slate-600">ID: {book.memberId}</p>
                      </div>
                    </div>
                  </td>
                  
                  <td className="py-4 px-6">
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs text-slate-500">Issued</p>
                        <div className="flex items-center gap-1 text-sm text-slate-700">
                          <Calendar size={14} />
                          {book.issuedDate}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Due</p>
                        <div className={`flex items-center gap-1 text-sm ${book.status === 'overdue' ? 'text-rose-600 font-medium' : 'text-slate-700'}`}>
                          <Calendar size={14} />
                          {book.dueDate}
                          {book.status === 'overdue' && <Clock size={14} />}
                        </div>
                      </div>
                    </div>
                  </td>
                  
                  <td className="py-4 px-6">
                    <StatusBadge status={book.status} overdueDays={book.overdueDays} />
                  </td>
                  
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      {book.status === 'active' && (
                        <>
                          <button 
                            onClick={() => handleReturnBook(book.id)}
                            className="px-3 py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg text-sm font-medium transition-colors"
                          >
                            Mark Returned
                          </button>
                          <button 
                            onClick={() => handleRenewBook(book.id)}
                            className="px-3 py-1.5 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-lg text-sm font-medium transition-colors"
                          >
                            Renew
                          </button>
                        </>
                      )}
                      
                      {book.status === 'overdue' && (
                        <button 
                          onClick={() => handleReturnBook(book.id)}
                          className="px-3 py-1.5 bg-rose-50 text-rose-700 hover:bg-rose-100 rounded-lg text-sm font-medium transition-colors"
                        >
                          Return & Fine
                        </button>
                      )}
                      
                      <button className="p-2 hover:bg-slate-100 rounded-lg">
                        <MoreVertical size={18} className="text-slate-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredBooks.length === 0 && (
          <div className="py-12 text-center">
            <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <Book size={24} className="text-slate-400" />
            </div>
            <p className="text-slate-500 font-medium">No issued books found</p>
            <p className="text-slate-400 text-sm mt-1">Try adjusting your search or filter</p>
          </div>
        )}

        {/* Table Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50">
          <p className="text-sm text-slate-600">
            Showing <span className="font-medium">{filteredBooks.length}</span> of <span className="font-medium">{issuedBooks.length}</span> issued books
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

      {/* Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6">
          <h3 className="font-semibold text-slate-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 bg-white rounded-lg hover:bg-slate-50 transition-colors">
              <span className="font-medium text-slate-700">View Overdue Books</span>
              <ChevronRight size={18} className="text-slate-400" />
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-white rounded-lg hover:bg-slate-50 transition-colors">
              <span className="font-medium text-slate-700">Send Due Reminders</span>
              <ChevronRight size={18} className="text-slate-400" />
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-white rounded-lg hover:bg-slate-50 transition-colors">
              <span className="font-medium text-slate-700">Generate Report</span>
              <ChevronRight size={18} className="text-slate-400" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-6">
          <h3 className="font-semibold text-slate-800 mb-4">Recently Returned</h3>
          <div className="space-y-4">
            {issuedBooks
              .filter(b => b.status === 'returned')
              .slice(0, 3)
              .map(book => (
                <div key={book.id} className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-14 ${book.coverColor} rounded-lg`}></div>
                    <div>
                      <p className="font-medium text-slate-800">{book.bookTitle}</p>
                      <p className="text-sm text-slate-600">Returned on {book.returnDate}</p>
                    </div>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                    View Details
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssuedBooksPage;