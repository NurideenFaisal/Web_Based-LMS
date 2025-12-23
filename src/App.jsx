import React, { useState } from 'react'
import { Search, Book, Users, Package, TrendingUp, Bell, Calendar, Download, CheckCircle, Clock, BookOpen, User, Settings, LogOut, Menu, X } from 'lucide-react'

const LibraryManagementSystem = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const stats = [
    { label: 'Total Books', value: '12,459', change: '+12%', icon: Book, color: 'bg-blue-500' },
    { label: 'Active Members', value: '3,847', change: '+8%', icon: Users, color: 'bg-purple-500' },
    { label: 'Books Issued', value: '892', change: '+23%', icon: Package, color: 'bg-green-500' },
    { label: 'Overdue', value: '47', change: '-5%', icon: TrendingUp, color: 'bg-orange-500' }
  ]

  const recentBooks = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', status: 'Available', cover: '📚', members: 1 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Classic', status: 'Borrowed', cover: '📖', members: 1 },
    { id: 3, title: '1984', author: 'George Orwell', category: 'Science Fiction', status: 'Available', cover: '📕', members: 4 },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', category: 'Romance', status: 'Reserved', cover: '📘', members: 2 }
  ]

  const issuedBooks = [
    { id: 1, book: 'Clean Code', member: 'John Anderson', memberAvatar: '👨‍💼', issueDate: '15.12.2022', dueDate: '29.12.2022', status: 'Active' },
    { id: 2, book: 'Design Patterns', member: 'Sarah Williams', memberAvatar: '👩‍💻', issueDate: '18.12.2022', dueDate: '01.01.2023', status: 'Due Soon' },
    { id: 3, book: 'JavaScript Guide', member: 'Mike Johnson', memberAvatar: '👨‍🎓', issueDate: '10.12.2022', dueDate: '24.12.2022', status: 'Active' }
  ]

  const notifications = [
    { id: 1, title: 'New Book Arrival', desc: 'The Midnight Library added', time: '2 hours ago' },
    { id: 2, title: 'Overdue Alert', desc: '5 books overdue this week', time: '5 hours ago' },
    { id: 3, title: 'Member Request', desc: 'New membership application', time: '1 day ago' }
  ]

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'books', label: 'Books Collection', icon: Book },
    { id: 'members', label: 'Members', icon: Users },
    { id: 'issued', label: 'Issued Books', icon: Package },
    { id: 'calendar', label: 'Calendar', icon: Calendar }
  ]

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-xl transition-all duration-300 flex flex-col`}>
        <div className="p-6 flex items-center justify-between border-b border-slate-200">
          {sidebarOpen && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                L
              </div>
              <span className="font-bold text-xl text-slate-800">LibraryHub</span>
            </div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-200'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <item.icon size={20} />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        {sidebarOpen && (
          <div className="p-4 border-t border-slate-200">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-indigo-100">
              <BookOpen className="text-indigo-600 mb-2" size={24} />
              <h4 className="font-semibold text-slate-800 mb-1">Need Help?</h4>
              <p className="text-xs text-slate-600 mb-3">Check our documentation for guidance</p>
              <button className="w-full bg-white text-indigo-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-indigo-50 transition-colors">
                Get Support
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-slate-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Search books, members, or transactions..."
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 ml-8">
              <div className="text-sm text-slate-600">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <Bell size={20} className="text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                <div className="text-right">
                  <div className="font-semibold text-sm text-slate-800">Admin User</div>
                  <div className="text-xs text-slate-500">Librarian</div>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold shadow-lg">
                  AU
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-8">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-8 mb-8 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">Welcome back, Admin! 👋</h1>
                <p className="text-indigo-100 mb-4">Here's what's happening in your library today</p>
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                  Add New Book
                </button>
              </div>
              <div className="text-8xl opacity-20">📚</div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg`}>
                    <stat.icon size={24} />
                  </div>
                  <span className="text-green-600 text-sm font-semibold bg-green-50 px-3 py-1 rounded-full">{stat.change}</span>
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Books Collection */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-slate-800">Books Collection</h2>
                  <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700 flex items-center gap-1">
                    View All
                    <span>→</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recentBooks.map(book => (
                    <div key={book.id} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-5 hover:shadow-md transition-all border border-slate-200">
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-4xl">{book.cover}</div>
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                          book.status === 'Available' ? 'bg-green-100 text-green-700' :
                          book.status === 'Borrowed' ? 'bg-orange-100 text-orange-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {book.status}
                        </span>
                      </div>
                      <h3 className="font-semibold text-slate-800 mb-1">{book.title}</h3>
                      <p className="text-sm text-slate-600 mb-3">{book.author}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500 bg-white px-3 py-1 rounded-full">{book.category}</span>
                        <div className="flex -space-x-2">
                          {[...Array(book.members)].map((_, i) => (
                            <div key={i} className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white text-white text-xs flex items-center justify-center">
                              {i + 1}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Issued Books Table */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
                <h2 className="text-xl font-bold text-slate-800 mb-6">Recently Issued</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Book</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Member</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Issue Date</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Due Date</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {issuedBooks.map(item => (
                        <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-4">
                            <div className="font-medium text-slate-800">{item.book}</div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{item.memberAvatar}</span>
                              <span className="text-slate-700">{item.member}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-slate-600">{item.issueDate}</td>
                          <td className="py-4 px-4 text-slate-600">{item.dueDate}</td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              item.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                            }`}>
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sidebar Widgets */}
            <div className="space-y-6">
              {/* Calendar Widget */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-800">December 2022</h3>
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-slate-100 rounded">←</button>
                    <button className="p-1 hover:bg-slate-100 rounded">→</button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center mb-2">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                    <div key={day} className="text-xs font-semibold text-slate-500">{day}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {[...Array(31)].map((_, i) => (
                    <div key={i} className={`aspect-square flex items-center justify-center text-sm rounded-lg ${
                      i + 1 === 21 ? 'bg-indigo-500 text-white font-bold' :
                      i + 1 === 7 || i + 1 === 19 ? 'bg-indigo-100 text-indigo-600' :
                      'text-slate-700 hover:bg-slate-100'
                    }`}>
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>

              {/* Notifications */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-slate-800 mb-4">Notifications</h3>
                <div className="space-y-4">
                  {notifications.map(notif => (
                    <div key={notif.id} className="flex gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="font-medium text-sm text-slate-800">{notif.title}</div>
                        <div className="text-xs text-slate-600 mb-1">{notif.desc}</div>
                        <div className="text-xs text-slate-400">{notif.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default LibraryManagementSystem
