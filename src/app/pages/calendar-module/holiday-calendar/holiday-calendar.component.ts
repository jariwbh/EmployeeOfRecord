import { Component } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core'; // import the CalendarOptions and EventInput interfaces
import dayGridPlugin from '@fullcalendar/daygrid'; // import the dayGrid plugin

@Component({
  selector: 'app-holiday-calendar',
  templateUrl: './holiday-calendar.component.html',
  styleUrls: ['./holiday-calendar.component.css']
})
export class HolidayCalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin], // include the dayGrid plugin
    events: <EventInput[]>[
      { title: 'New Year\'s Day', date: '2023-01-01' },
      { title: 'Christmas Day', date: '2023-12-25' }
      // Add more holiday events here
    ]
  };

  addHoliday() {
    const newHoliday: EventInput = { title: 'New Holiday', date: '2023-07-04' }; // Example holiday
    const events = this.calendarOptions.events as EventInput[] || [];
    this.calendarOptions.events = [...events, newHoliday];
  }
}
