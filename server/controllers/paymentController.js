import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export const initializePayment = async (req, res) => {
  try {
    const { amount, currency, transaction_id, customer_name, customer_email, customer_phone } = req.body;

    const paymentData = {
      apikey: process.env.CINETPAY_API_KEY,
      site_id: process.env.CINETPAY_SITE_ID,
      transaction_id: transaction_id,
      amount: amount,
      currency: currency || 'XOF',
      description: 'Payment on Ankshop',
      customer_name,
      customer_email,
      customer_phone_number: customer_phone,
      return_url: 'https://your-site.com/payment-success', // update with your actual return URL
      notify_url: 'https://your-site.com/payment-notify',  // update with your actual webhook/notify URL
      channels: 'ALL',
      metadata: 'Order metadata',
    };

    const response = await axios.post(process.env.CINETPAY_URL, paymentData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Forward CinetPay response
    res.status(200).json(response.data);

  } catch (error) {
    console.error('CinetPay Error:', error.response?.data || error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to initialize CinetPay payment',
      error: error.response?.data || error.message
    });
  }
};
