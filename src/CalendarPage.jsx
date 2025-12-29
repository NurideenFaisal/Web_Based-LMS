// CalendarPage.jsx
import React, { useState } from 'react';
import {
  Calendar as CalendarIcon, ChevronLeft, ChevronRight,
  Book, User, Clock, Tag, Filter, Plus, MoreVertical,
  Bell, CheckCircle, AlertCircle, Coffee, Users
} from 'lucide-react';

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month'); // month, week, day
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  // Sample events - These would come from your existing data
  const events = {
    '2024-01-25': [
      { 
        id: 1, 
        type: 'due', 
        title: 'Book Returns Due', 
        count: 3,
        color: 'bg-emerald-100 border-emerald-200',
        icon: Book,
        time: 'All day',
        books: ['Atomic Habits', 'Deep Work', 'The Psychology of Money']
      },
      { 
        id: 2, 
        type: 'event', 
        title: 'Morning Book Club', 
        color: 'bg-indigo-100 border-indigo-200',
        icon: Users,
        time: '10:00 AM',
        location: 'Reading Room'
      }
    ],
    '2024-01-26': [
      { 
        id: 3, 
        type: 'due', 
        title: 'Membership Renewals', 
        count: 2,
        color: 'bg-amber-100 border-amber-200',
        icon: User,
        time: 'All day'
      }
    ],
    '2024-01-27': [
      { 
        id: 4, 
        type: 'event', 
        title: 'Author Visit', 
        color: 'bg-purple-100 border-purple-200',
        icon: Coffee,
        time: '3:00 PM',
        location: 'Main Hall'
      }
    ],
    '2024-01-30': [
      { 
        id: 5, 
        type: 'due', 
        title: 'Book Returns Due', 
        count: 5,
        color: 'bg-rose-100 border-rose-200',
        icon: AlertCircle,
        time: 'All day',
        note: 'High priority'
      }
    ]
  };

  // Get events for selected date
  const selectedEvents = events[selectedDate] || [];

  // Navigation
  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  // Generate month days
  const generateMonthDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    const startingDay = firstDay.getDay(); // 0 = Sunday
    
    const days = [];
    
    // Previous month's days
    for (let i = 0; i < startingDay; i++) {
      const date = new Date(year, month, -i);
      days.unshift({
        date: date.toISOString().split('T')[0],
        isCurrentMonth: false,
        isToday: false,
        events: []
      });
    }
    
    // Current month's days
    const today = new Date().toISOString().split('T')[0];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i).toISOString().split('T')[0];
      days.push({
        date,
        isCurrentMonth: true,
        isToday: date === today,
        events: events[date] || []
      });
    }
    
    // Pad to multiple of 7 (weeks)
    while (days.length % 7 !== 0) {
      const lastDate = new Date(days[days.length - 1].date);
      lastDate.setDate(lastDate.getDate() + 1);
      days.push({
        date: lastDate.toISOString().split('T')[0],
        isCurrentMonth: false,
        isToday: false,
        events: []
      });
    }
    
    return days;
  };

  const days = generateMonthDays();
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Stats
  const stats = {
    totalDueThisWeek: 15,
    eventsThisWeek: 4,
    overdueItems: 2,
    membershipsExpiring: 3
  };

  // Quick actions
  const quickActions = [
    { icon: Bell, label: 'Set Reminder', color: 'bg-blue-50 text-blue-600' },
    { icon: Book, label: 'View Due Books', color: 'bg-emerald-50 text-emerald-600' },
    { icon: User, label: 'Renew Memberships', color: 'bg-amber-50 text-amber-600' }
  ];

  return (
    <div className="space-y-6">
      {/* Minimal Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Calendar</h1>
          <p className="text-slate-500 text-sm mt-1">Time-based view of library activities</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2">
            <CalendarIcon size={18} className="text-slate-500" />
            <span className="font-medium text-slate-700">
              {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </span>
          </div>
          
          <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
            <Plus size={20} className="text-slate-600" />
          </button>
        </div>
      </div>

      {/* Main Calendar Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View - Left 2/3 */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          {/* Calendar Navigation */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigateMonth(-1)}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <ChevronLeft size={20} className="text-slate-600" />
              </button>
              
              <h2 className="text-lg font-semibold text-slate-800">
                {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h2>
              
              <button 
                onClick={() => navigateMonth(1)}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <ChevronRight size={20} className="text-slate-600" />
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              {['month', 'week', 'day'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg capitalize transition-colors ${
                    viewMode === mode
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Day Names */}
          <div className="grid grid-cols-7 mb-4">
            {dayNames.map((day) => (
              <div key={day} className="text-center text-sm font-medium text-slate-500 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => {
              const isSelected = day.date === selectedDate;
              const hasEvents = day.events.length > 0;
              
              return (
                <button
                  key={index}
                  onClick={() => setSelectedDate(day.date)}
                  className={`
                    aspect-square p-2 rounded-xl transition-all duration-200
                    ${!day.isCurrentMonth ? 'opacity-30' : ''}
                    ${isSelected ? 'bg-indigo-50 border border-indigo-200' : 'hover:bg-slate-50'}
                    ${day.isToday && !isSelected ? 'bg-slate-50' : ''}
                    flex flex-col items-center justify-start
                  `}
                >
                  {/* Date Number */}
                  <span className={`
                    text-sm font-medium mb-1
                    ${isSelected ? 'text-indigo-600' : day.isToday ? 'text-indigo-600' : 'text-slate-700'}
                    ${!day.isCurrentMonth ? 'text-slate-400' : ''}
                  `}>
                    {new Date(day.date).getDate()}
                  </span>
                  
                  {/* Event Indicators */}
                  {hasEvents && (
                    <div className="flex flex-wrap justify-center gap-1 mt-1">
                      {day.events.slice(0, 2).map((event, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full ${
                            event.type === 'due' ? 'bg-emerald-400' : 
                            event.type === 'event' ? 'bg-indigo-400' : 
                            'bg-amber-400'
                          }`}
                        />
                      ))}
                      {day.events.length > 2 && (
                        <div className="w-2 h-2 rounded-full bg-slate-300" />
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Date Details - Right 1/3 */}
        <div className="space-y-6">
          {/* Selected Date Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {new Date(selectedDate).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {selectedEvents.length} {selectedEvents.length === 1 ? 'event' : 'events'}
                </p>
              </div>
              
              <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
                <MoreVertical size={20} className="text-slate-600" />
              </button>
            </div>

            {/* Events List */}
            <div className="space-y-3">
              {selectedEvents.length > 0 ? (
                selectedEvents.map((event) => {
                  const Icon = event.icon || CalendarIcon;
                  return (
                    <div
                      key={event.id}
                      className={`p-4 rounded-xl border ${event.color} transition-all hover:scale-[1.02]`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-white rounded-lg shadow-sm">
                            <Icon size={18} className="text-slate-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-slate-800">{event.title}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <Clock size={14} className="text-slate-400" />
                              <span className="text-sm text-slate-600">{event.time}</span>
                            </div>
                            {event.location && (
                              <div className="flex items-center gap-2 mt-1">
                                <Tag size={14} className="text-slate-400" />
                                <span className="text-sm text-slate-600">{event.location}</span>
                              </div>
                            )}
                            {event.books && (
                              <div className="mt-2">
                                <p className="text-xs text-slate-500">Books due:</p>
                                <p className="text-sm text-slate-700 mt-1">{event.books.join(', ')}</p>
                              </div>
                            )}
                          </div>
                        </div>
                        {event.count && (
                          <span className="px-2 py-1 bg-white rounded-full text-xs font-medium text-slate-700">
                            {event.count}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-8">
                  <div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-3">
                    <CalendarIcon size={24} className="text-slate-400" />
                  </div>
                  <p className="text-slate-500 font-medium">No events scheduled</p>
                  <p className="text-slate-400 text-sm mt-1">Enjoy the quiet day</p>
                </div>
              )}
            </div>

            {/* Add Event Button */}
            <button className="w-full mt-4 py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl transition-colors flex items-center justify-center gap-2">
              <Plus size={18} />
              <span className="font-medium">Add Event</span>
            </button>
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 p-6">
            <h3 className="text-sm font-semibold text-slate-700 mb-4">THIS WEEK</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span className="text-sm text-slate-600">Books Due</span>
                </div>
                <span className="font-medium text-slate-800">{stats.totalDueThisWeek}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                  <span className="text-sm text-slate-600">Events</span>
                </div>
                <span className="font-medium text-slate-800">{stats.eventsThisWeek}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                  <span className="text-sm text-slate-600">Overdue</span>
                </div>
                <span className="font-medium text-slate-800">{stats.overdueItems}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              className="flex items-center justify-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <div className={`p-2 rounded-lg ${action.color}`}>
                <Icon size={20} />
              </div>
              <span className="font-medium text-slate-700">{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarPage;