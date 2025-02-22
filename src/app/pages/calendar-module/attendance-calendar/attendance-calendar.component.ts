import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { AttendanceService } from '../../../services/attendance.service';

@Component({
  selector: 'app-attendance-calendar',
  templateUrl: './attendance-calendar.component.html'
})
export class AttendanceCalendarComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: []
  };

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit() {
    this.attendanceService.getAttendanceRecords().subscribe(data => {
      const events: EventInput[] = data.map((attendance: any) => ({
        title: attendance.status,
        date: attendance.date
      }));
      this.calendarOptions.events = events;
    });
  }
}
