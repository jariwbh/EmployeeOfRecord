import { Component, Input, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { AttendanceService } from '../../../services/attendance.service';

@Component({
  selector: 'app-staff-attendance',
  templateUrl: './staff-attendance.component.html'
})
export class StaffAttendanceComponent implements OnInit {
  @Input() staff: any;
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    }
  };

  constructor(private attendanceService: AttendanceService) { }

  async ngOnInit() {
    this.getAttendanceRecord();
  }

  async getAttendanceRecord() {
    try {
      this.attendanceService.getAttendanceByEmployeeId(this.staff._id).subscribe((attendanceRecords: any) => {
        console.log('attendanceRecords =>', attendanceRecords);
        this.calendarOptions.events = attendanceRecords.map((record: any) => {
          const checkinTime = new Date(record.checkin).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const checkoutTime = new Date(record.checkout).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          return {
            title: `${checkinTime} - ${checkoutTime}`,
            start: record.date,
            end: record.date
          };
        });
      }, (error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
}
