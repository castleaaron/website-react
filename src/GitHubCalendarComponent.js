import React, { useEffect, useRef } from 'react';
import GitHubCalendar from 'github-calendar';
import 'github-calendar/dist/github-calendar-responsive.css'; // Import the CSS for responsive design

const GitHubCalendarComponent = ({ username }) => {
  const calendarRef = useRef(null);

  useEffect(() => {
    if (calendarRef.current) {
      GitHubCalendar(calendarRef.current, username);
    }
  }, [username]);

  return <div ref={calendarRef} className="GithubCalendar"></div>;
};

export default GitHubCalendarComponent;