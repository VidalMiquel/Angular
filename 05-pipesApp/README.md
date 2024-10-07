## Overview

In this project, we have successfully implemented Angular features, focusing on the effective use of pipes along with the integration of PrimeNG and PrimeFlex. Our goal was to create a dynamic and responsive user interface that enhances the user experience.

### Utilizing Pipes

We leveraged Angular's powerful pipe feature to transform and format data directly within our templates. This includes:

- **Uppercase, Lowercase, and Titlecase**: For text transformations, ensuring that our data is presented clearly.
- **Decimal, Currency, and Percent**: For numerical data, allowing us to display values in a user-friendly manner.
- **Slice**: To manipulate arrays and strings, making it easier to present relevant information.
- **Async**: To handle asynchronous data streams seamlessly.

### Integrating PrimeNG and PrimeFlex

To enhance our user interface, we utilized **PrimeNG**, a rich set of UI components that provide a wide range of pre-built elements, such as tables, charts, and forms. This allowed us to create a visually appealing and functional application quickly.

Additionally, we incorporated **PrimeFlex**, a utility library that offers a flexible and responsive layout system. With PrimeFlex, we were able to manage spacing, alignment, and responsiveness effectively, ensuring our application looks great on any device.

## Example Implementation

An example of our implementation can be seen in the use of a PrimeNG table, where we applied various pipes to format the data displayed:

```html
<p-table [value]="data">
  <ng-template pTemplate="header">
    <tr>
      <th>Name</th>
      <th>Price</th>
    </tr>
  </ng-template>
  <ng-template pTemplate="body" let-item>
    <tr>
      <td>{{ item.name | titlecase }}</td>
      <td>{{ item.price | currency:'USD' }}</td>
    </tr>
  </ng-template>
</p-table>
