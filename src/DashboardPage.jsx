import React from 'react';
import { Book, Users, Package, TrendingUp } from 'lucide-react';

const DashboardPage = () => {
  const stats = [
    { label: 'Total Books', value: '12,459', change: '+12%', icon: Book, color: 'bg-blue-500' },
    { label: 'Active Members', value: '3,847', change: '+8%', icon: Users, color: 'bg-purple-500' },
    { label: 'Books Issued', value: '892', change: '+23%', icon: Package, color: 'bg-green-500' },
    { label: 'Overdue', value: '47', change: '-5%', icon: TrendingUp, color: 'bg-orange-500' }
  ];

  const notifications = [
    { id: 1, title: 'New Book Arrival', desc: 'The Midnight Library added', time: '2 hours ago' },
    { id: 2, title: 'Overdue Alert', desc: '5 books overdue this week', time: '5 hours ago' },
    { id: 3, title: 'Member Request', desc: 'New membership application', time: '1 day ago' }
  ];

  return (
    <div>
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

      {/* Notifications */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="font-bold text-slate-800 mb-4">Notifications</h3>
        <div className="space-y-4">
          {notifications.map(notif => (
            <div key={notif.id} className="flex gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer">
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
  );
};

export default DashboardPage;