import React, { useState, useEffect } from 'react'
import { Search, Book, Users, Package, TrendingUp, Bell, Calendar, BookOpen, Menu, X, Plus, Edit2, Trash2, ArrowUpDown } from 'lucide-react'
import BooksCollection from './BooksCollection' // import your page
import DashboardPage from './DashboardPage'
import MembersPage from './MembersPage'
import IssuedBooksPage from './IssuedBooksPage'
import CalendarPage from './CalendarPage'

const LibraryManagementSystem = () => {
  // Load saved tab from localStorage, or default to 'dashboard'
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem('activeTab') || 'dashboard'
  })
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Save to localStorage whenever tab changes
  useEffect(() => {
    localStorage.setItem('activeTab', activeTab)
  }, [activeTab]) 

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
              <span className="font-bold text-xl text-slate-800">FaisalHub</span>
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
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeTab === item.id
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-200'
                  : 'text-slate-600 hover:bg-slate-100'
                }`}
            >
              <item.icon size={20} />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>
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
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-8">
          {activeTab === 'dashboard' && ( <DashboardPage/> )}

          
          {activeTab === 'books' && (
            <BooksCollection />
          )}

          {/* Placeholder for other tabs */}
          {activeTab === 'members' && (
            <MembersPage />
          )}

          {activeTab === 'issued' && (
            <IssuedBooksPage />
          )}

          {activeTab === 'calendar' && (
            <CalendarPage />
          )}
        </main>
      </div>
    </div>
  )
}

export default LibraryManagementSystem
