import React from 'react'

const Shippingpolicypage = () => {
  return (
    <div>
      <div className="flex justify-center items-center px-16 py-20 font-bold bg-white max-md:px-5">
        <div className="flex flex-col items-center mt-40 w-full max-w-[1168px] max-md:mt-10 max-md:max-w-full">
          <div className="text-5xl text-center capitalize leading-[49.92px] text-yellow-950 max-md:text-4xl">
            Shipping Policy
          </div>
          <div className="mt-14 text-lg text-center text-yellow-800 w-[796px] max-md:mt-10 max-md:max-w-full">
            Thank you for visiting and shopping at Nutrachoco. Following are the
            terms and conditions that constitute our Shipping Policy.
          </div>
          <div className="self-stretch mt-20 text-base text-black max-md:mt-10 max-md:max-w-full">
            <span className="text-xl font-bold leading-6 text-yellow-950">
              Domestic Shipping Policy
            </span>
            <br />
            <br />
            <span className="text-lg font-bold leading-6 text-stone-500">
              Shipment processing time
            </span>
            <br />
            All orders are processed within 1-3 business days. Orders are not
            shipped or delivered on weekends or holidays. If we are experiencing
            a high volume of orders, shipments may be delayed by a few days.
            Please allow additional days in transit for delivery. If there will
            be a significant delay in shipment of your order, we will contact
            you via email or telephone.
            <br />
            <br />
            <span className="text-lg font-bold text-stone-500">
              Shipping rates & delivery estimates
            </span>
            <br />
            Shipping charges for your order will be calculated and displayed at
            checkout. Estimated delivery times are as follows:
            <ul>
              <li>
                <span className="font-semibold">Standard Shipping:</span> 3-5
                business days
              </li>
              <li>
                <span className="font-semibold">Express Shipping: </span>1-2
                business days
              </li>
            </ul>
            <br />
            <span className="text-lg font-bold text-stone-500">
              Shipment confirmation & Order tracking
            </span>
            <br />
            You will receive a Shipment Confirmation email once your order has
            shipped containing your tracking number(s). The tracking number will
            be active within 24 hours.
            <br />
            <br />
            <span className="text-lg font-bold text-stone-500">Damages</span>
            <br />
            Nutrachoco is not liable for any products damaged or lost during
            shipping. If you received your order damaged, please contact the
            shipment carrier to file a claim. Please save all packaging
            materials and damaged goods before filing a claim.
            <br />
            <br />
            <span className="text-xl font-bold text-yellow-950">
              International Shipping Policy
            </span>
            <br />
            We currently do not ship outside India.
            <br />
            <br />
            <span className="text-lg font-bold text-stone-500">
              Returns Policy
            </span>
            <br />
            Our Return & Refund Policy provides detailed information about
            options and procedures for returning your order.
            <br />
            Special Notes
            <ul>
              <li>
                <span className="font-semibold">
                  Customs, Duties, and Taxes:
                </span>{" "}
                Nutrachoco is not responsible for any customs and taxes applied
                to your order. All fees imposed during or after shipping are the
                responsibility of the customer (tariffs, taxes, etc.).
              </li>
              <li>
                <span className="font-semibold">Multiple Shipments:</span> If
                you order products that are not available at the time of
                packing, your items may be shipped separately depending on
                availability.
              </li>
            </ul>
            <br />
            <span className="text-lg font-bold text-stone-500">Contact Us</span>
            <br />
            For any questions regarding our Shipping Policy, please contact us
            at:
            <br />
            Email: support@nutrachoco.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shippingpolicypage;