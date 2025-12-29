import React, { useState } from 'react'
import { Search, Plus, Edit2, Trash2, ArrowUpDown, Book } from 'lucide-react'

const BooksCollectionPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortColumn, setSortColumn] = useState(null)
  const [sortDirection, setSortDirection] = useState('asc')

  const books = [
    { 
      id: 1,
      showNum: 1,
      title: 'The Great Gatsby', 
      author: 'F. Scott Fitzgerald', 
      isbn: '978-0-7432-7356-5',
      category: 'Fiction',
      subject: 'Literature',
      publisher: 'Scribner',
      year: 1925,
      totalCopies: 3,
      available: 2,
      status: 'Available'
    },
    { 
      id: 2,
      showNum: 2,
      title: 'To Kill a Mockingbird', 
      author: 'Harper Lee', 
      isbn: '978-0-06-112008-4',
      category: 'Fiction',
      subject: 'Literature',
      publisher: 'J.B. Lippincott',
      year: 1960,
      totalCopies: 2,
      available: 0,
      status: 'Borrowed'
    },
    { 
      id: 3,
      showNum: 3,
      title: '1984', 
      author: 'George Orwell', 
      isbn: '978-0-452-28423-4',
      category: 'Fiction',
      subject: 'Dystopian',
      publisher: 'Secker & Warburg',
      year: 1949,
      totalCopies: 4,
      available: 4,
      status: 'Available'
    },
    { 
      id: 4,
      showNum: 4,
      title: 'Pride and Prejudice', 
      author: 'Jane Austen', 
      isbn: '978-0-14-143951-8',
      category: 'Romance',
      subject: 'Classic Literature',
      publisher: 'T. Egerton',
      year: 1813,
      totalCopies: 3,
      available: 1,
      status: 'Available'
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

  return (
    <div>
      {/* Header Section - Similar to Dashboard Welcome Card */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-8 mb-8 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">Books Collection 📚</h1>
            <p className="text-indigo-100 mb-4">Manage your library's book inventory</p>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
              <Plus size={20} />
              <span>Add New Book</span>
            </button>
          </div>
          <div className="text-8xl opacity-20">📖</div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl shadow-lg p-3 mb-5">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search by title, author, ISBN, subject..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-slate-50 to-slate-100 border-b-2 border-slate-200">
              <tr>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 w-16">
                  <button onClick={() => handleSort('showNum')} className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
                    #
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700">
                  <button onClick={() => handleSort('title')} className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
                    Title
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700">
                  <button onClick={() => handleSort('author')} className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
                    Author
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700">
                  <button onClick={() => handleSort('isbn')} className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
                    ISBN
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700">
                  <button onClick={() => handleSort('category')} className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
                    Category
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700">
                  <button onClick={() => handleSort('subject')} className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
                    Subject
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700">
                  <button onClick={() => handleSort('publisher')} className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
                    Publisher
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700">
                  <button onClick={() => handleSort('year')} className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
                    Year
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700">
                  <button onClick={() => handleSort('totalCopies')} className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
                    Total
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700">
                  <button onClick={() => handleSort('available')} className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
                    Available
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700">
                  <button onClick={() => handleSort('status')} className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
                    Status
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-slate-700 sticky right-0 bg-gradient-to-r from-slate-50 to-slate-100 shadow-lg">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr 
                  key={book.id} 
                  className="border-b border-slate-100 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all"
                >
                  <td className="py-4 px-4 text-slate-600 text-sm font-medium">{book.showNum}</td>
                  <td className="py-4 px-4 text-slate-800 font-semibold text-sm">{book.title}</td>
                  <td className="py-4 px-4 text-slate-700 text-sm">{book.author}</td>
                  <td className="py-4 px-4 text-slate-600 text-xs font-mono">{book.isbn}</td>
                  <td className="py-4 px-4 text-slate-700 text-sm">{book.category}</td>
                  <td className="py-4 px-4 text-slate-700 text-sm">{book.subject}</td>
                  <td className="py-4 px-4 text-slate-700 text-sm">{book.publisher}</td>
                  <td className="py-4 px-4 text-slate-700 text-sm">{book.year}</td>
                  <td className="py-4 px-4 text-slate-700 text-sm text-center font-semibold">{book.totalCopies}</td>
                  <td className="py-4 px-4 text-sm text-center">
                    <span className={`font-bold ${book.available === 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {book.available}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      book.status === 'Available' ? 'bg-green-100 text-green-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {book.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 sticky right-0 bg-white shadow-lg">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg transition-all transform hover:-translate-y-0.5 hover:shadow-lg">
                        <Edit2 size={14} />
                      </button>
                      <button className="p-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg transition-all transform hover:-translate-y-0.5 hover:shadow-lg">
                        <Trash2 size={14} />
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
          Showing <span className="font-semibold text-indigo-600">1-4</span> of <span className="font-semibold text-indigo-600">1,247</span> books
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-all text-sm font-medium text-slate-700 hover:shadow-md">
            Previous
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-sm font-medium">
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

export default BooksCollectionPage