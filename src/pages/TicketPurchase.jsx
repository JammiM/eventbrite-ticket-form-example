import React from "react";
import { useState } from "react";

function TicketPurchase() {
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [ticketPrice, setTicketPrice] = useState(10);

  let options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const saleEndDate = new Intl.DateTimeFormat("en-IE", options).format(
    Date.now()
  );

  const eventName = "Pizza at Tony's";
  const cleanedEventDate = new Intl.DateTimeFormat("en-IE", options).format(
    new Date("03-02-2026")
  );

  const price = 10.5;
  let cleanUpPrice = ticketQuantity * price;
  let correctedPrice = new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
  }).format(cleanUpPrice);

  return (
    <div>
      <section>
        <p>{eventName}</p>
        <p>{cleanedEventDate}</p>
        <h3>General Admission {ticketQuantity}</h3>
        <p>Total : {correctedPrice}</p>

        <p>Sales end on {saleEndDate}</p>
      </section>
      <section>
        <div className="orderSummary">
          <p>
            {" "}
            {ticketQuantity} X General Admission : {correctedPrice}
          </p>

          <p>Total : {correctedPrice}</p>
        </div>
      </section>
    </div>
  );
}

export default TicketPurchase;
