import React from 'react';
import EmailTemplate from '../components/EmailTemplate';

const Index = () => {
  // Sample trading data that matches the structure from the original image
  const sampleTradeData = [
    {
      giltsi: "A1993388554",
      transactionDomain: "TRADE_BOOKING_ENGINE",
      statusCategory: "Description",
      brokerEmailIds: "broker@trading.com",
      brokerPhoneNumbers: "+1-555-0123",
      firmRootId: "2MDS1289",
      transactionId: "92a83dfe-6e99-11ef-8009-23aee90e62e6"
    },
    {
      giltsi: "",
      transactionDomain: "TRADE_BOOKING_ENGINE",
      statusCategory: "Description",
      brokerEmailIds: "",
      brokerPhoneNumbers: "",
      firmRootId: "2MDS8PTS",
      transactionId: "92abee4d-7eb9-11ef-a214-27fee4537cc"
    },
    {
      giltsi: "",
      transactionDomain: "TRADE_BOOKING_ENGINE",
      statusCategory: "CP has no instructions",
      brokerEmailIds: "",
      brokerPhoneNumbers: "",
      firmRootId: "2MFGB5N0",
      transactionId: "92ac03ee-308c-11f6-aeda-f7b45165094b"
    },
    {
      giltsi: "",
      transactionDomain: "TRADE_BOOKING_ENGINE",
      statusCategory: "Description",
      brokerEmailIds: "",
      brokerPhoneNumbers: "",
      firmRootId: "2MF14F1K",
      transactionId: "92ac0500-1511-11f6-8bb3-9f72b24d6Tb"
    },
    {
      giltsi: "",
      transactionDomain: "TRADE_BOOKING_ENGINE",
      statusCategory: "Description",
      brokerEmailIds: "",
      brokerPhoneNumbers: "",
      firmRootId: "2MF14ZMD",
      transactionId: "92ac419c-1912-11f6-8b6e-e1f73e16f889"
    },
    {
      giltsi: "",
      transactionDomain: "TRADE_BOOKING_ENGINE",
      statusCategory: "Description",
      brokerEmailIds: "",
      brokerPhoneNumbers: "",
      firmRootId: "2MDNV3S2",
      transactionId: "92c115b4-fa59-11ef-9614-e58d73671aa2"
    },
    {
      giltsi: "",
      transactionDomain: "TRADE_BOOKING_ENGINE",
      statusCategory: "Description",
      brokerEmailIds: "",
      brokerPhoneNumbers: "",
      firmRootId: "TMY043LX",
      transactionId: "92c53f54-300b-11f6-ae5a-7faa4801e44"
    }
  ];

  const sampleAttachments = [
    {
      name: "Trading_Report_2024.pdf",
      size: "2.4 MB",
      type: "document" as const,
      url: "/placeholder.svg" // Demo URL
    },
    {
      name: "Market_Analysis.xlsx",
      size: "1.8 MB", 
      type: "document" as const,
      url: "/placeholder.svg" // Demo URL
    },
    {
      name: "Transaction_Summary.csv",
      size: "156 KB",
      type: "document" as const,
      url: "/placeholder.svg" // Demo URL
    },
    {
      name: "Chart_Screenshot.png",
      size: "892 KB",
      type: "image" as const,
      url: "/placeholder.svg" // Demo URL
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Professional Email Template</h1>
          <p className="text-gray-600">Modern, clean design for financial and trading communications</p>
        </div>
        
        <EmailTemplate
          toEmails={['eggmarket@orangetanley.com', 'Gil.Pepin@orangetanley.com']}
          ccEmails={['nshu.kumar@princbase.com']}
          bccEmails={['rishu.kumar@princbase.com']}
          fromEmail="rishu.kumar@princbase.com"
          subject="CSWISE Trading Report - Daily Summary"
          tradeData={sampleTradeData}
          attachments={sampleAttachments}
        />
      </div>
    </div>
  );
};

export default Index;
