---
title: 'Hotel Booking System'
draft : false
weight: 1
---

---

- ### Task

A hotel needs an interactive booking system where users can book, cancel, and check room availability through a menu-driven interface. 
The system should be user-friendly and ensure that all booking details are entered dynamically by the user. Additionally, booking records should be saved 
automatically when the system shuts down and reloaded when it restarts to prevent data loss.

{{< collapsible-codesection title="Instructions" >}}
<div class="instruction-section-space"></div>

- Rooms & Pricing:
    - The hotel has a limited number of rooms, each with: 
        - A unique number (e.g. 101, 102, 103)
        - A type (Single, Double, Suite)
        - A price per night (e.g. rs2000, rs3000, rs5000)
    - A room can either be Available or Occupied.
- Booking Functionality:
    - Guests can do the following interactions via a menu:
        - Check room availability.
        - Book a room by providing their name and contact details.
        - Cancel their reservation.
- Automatic Data Handling:
    - The system should automatically save booking records when the program exits.
    - When the system restarts, it should reload the last saved bookings so no data is lost.
{{< /collapsible-codesection >}}

---

- ### Main Lessons

<ul class="dash-ul">
    <li>This project is to practically understand and implement the real world business logic</li>
    <li>A basic save and load system</li>
</ul>

---

- ### Guidelines

Feel free to implement additional features to enhance the system's functionality.