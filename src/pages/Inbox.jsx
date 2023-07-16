import React from 'react';
import Navigation from '../components/inbox/Navigation';
import Sidebar from '../components/inbox/Sidebar';
import Chatbody from '../components/inbox/chatbody/Chatbody';

export default function Inbox() {
  return (
    <div>
      <Navigation />
      <div className="max-w-7xl mx-auto -mt-1">
        <div className="min-w-full border rounded flex lg:grid lg:grid-cols-3">
          <Sidebar />
          <Chatbody />
        </div>
      </div>
    </div>
  );
}
