import React, { useState } from 'react'
import { Search, Plus, Edit2, Trash2, ArrowUpDown } from 'lucide-react'

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
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Books</h1>
        <p className="text-slate-600">Manage your library's book collection</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-0.5 font-medium">
            <Plus size={20} />
            <span>Add New Book</span>
          </button>
        </div>

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

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b-2 border-slate-200">
              <tr>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-600 w-16">
                  <button onClick={() => handleSort('showNum')} className="flex items-center gap-1 hover:text-slate-800">
                    Show #
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-600">
                  <button onClick={() => handleSort('title')} className="flex items-center gap-1 hover:text-slate-800">
                    Title
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-600">
                  <button onClick={() => handleSort('author')} className="flex items-center gap-1 hover:text-slate-800">
                    Author
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-600">
                  <button onClick={() => handleSort('isbn')} className="flex items-center gap-1 hover:text-slate-800">
                    ISBN
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-600">
                  <button onClick={() => handleSort('category')} className="flex items-center gap-1 hover:text-slate-800">
                    Category
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-600">
                  <button onClick={() => handleSort('subject')} className="flex items-center gap-1 hover:text-slate-800">
                    Subject
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-600">
                  <button onClick={() => handleSort('publisher')} className="flex items-center gap-1 hover:text-slate-800">
                    Publisher
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-600">
                  <button onClick={() => handleSort('year')} className="flex items-center gap-1 hover:text-slate-800">
                    Year
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-600">
                  <button onClick={() => handleSort('totalCopies')} className="flex items-center gap-1 hover:text-slate-800">
                    Total Copies
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-600">
                  <button onClick={() => handleSort('available')} className="flex items-center gap-1 hover:text-slate-800">
                    Available
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-600">
                  <button onClick={() => handleSort('status')} className="flex items-center gap-1 hover:text-slate-800">
                    Status
                    <ArrowUpDown size={14} />
                  </button>
                </th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-slate-600 bg-slate-50 sticky right-0 shadow-lg">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr 
                  key={book.id} 
                  className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-slate-25'
                  }`}
                >
                  <td className="py-3 px-4 text-slate-700 text-sm">{book.showNum}</td>
                  <td className="py-3 px-4 text-slate-800 font-medium text-sm">{book.title}</td>
                  <td className="py-3 px-4 text-slate-700 text-sm">{book.author}</td>
                  <td className="py-3 px-4 text-slate-600 text-xs">{book.isbn}</td>
                  <td className="py-3 px-4 text-slate-700 text-sm">{book.category}</td>
                  <td className="py-3 px-4 text-slate-700 text-sm">{book.subject}</td>
                  <td className="py-3 px-4 text-slate-700 text-sm">{book.publisher}</td>
                  <td className="py-3 px-4 text-slate-700 text-sm">{book.year > 0 ? book.year : 'Ancient'}</td>
                  <td className="py-3 px-4 text-slate-700 text-sm text-center">{book.totalCopies}</td>
                  <td className="py-3 px-4 text-slate-700 text-sm text-center">
                    <span className={`font-semibold ${book.available === 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {book.available}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      book.status === 'Available' ? 'bg-green-100 text-green-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {book.status}
                    </span>
                  </td>
                  <td className={`py-3 px-4 sticky right-0 shadow-lg ${
                    index % 2 === 0 ? 'bg-white' : 'bg-slate-25'
                  }`}>
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors shadow-md hover:shadow-lg">
                        <Edit2 size={14} />
                      </button>
                      <button className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors shadow-md hover:shadow-lg">
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

      <div className="mt-6 flex items-center justify-between bg-white rounded-2xl shadow-lg p-4">
        <div className="text-sm text-slate-600">
          Showing <span className="font-semibold">1-10</span> of <span className="font-semibold">1,247</span> books
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors text-sm font-medium text-slate-700">
            Previous
          </button>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors text-sm font-medium">
            1
          </button>
          <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors text-sm font-medium text-slate-700">
            2
          </button>
          <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors text-sm font-medium text-slate-700">
            3
          </button>
          <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors text-sm font-medium text-slate-700">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default BooksCollectionPage

