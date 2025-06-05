
import React from 'react';
import { Card } from '@/components/ui/card';
import { Mail } from 'lucide-react';

interface TradeData {
  giltsi: string;
  transactionDomain: string;
  statusCategory: string;
  brokerEmailIds: string;
  brokerPhoneNumbers: string;
  firmRootId: string;
  transactionId: string;
  notes?: string;
}

interface EmailTemplateProps {
  recipientName?: string;
  fromEmail?: string;
  toEmails: string[];
  ccEmails?: string[];
  bccEmails?: string[];
  subject?: string;
  tradeData: TradeData[];
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  recipientName = "Trading Team",
  fromEmail = "system@company.com",
  toEmails,
  ccEmails = [],
  bccEmails = [],
  subject = "CSWISE Trading Report",
  tradeData
}) => {
  const EmailAddressList = ({ emails, label }: { emails: string[], label: string }) => (
    <div className="mb-3">
      <div className="flex items-start gap-2">
        <span className="font-semibold text-gray-700 min-w-[40px] mt-1">{label}:</span>
        <div className="flex-1">
          <div className="flex flex-wrap gap-1">
            {emails.map((email, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm border border-blue-200"
              >
                <Mail className="h-3 w-3" />
                {email}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto bg-white font-sans">
      {/* Email Header */}
      <div className="bg-slate-50 border-b border-gray-200 p-6">
        <div className="space-y-4">
          {/* From Email */}
          <div className="flex items-center gap-2 pb-3 border-b border-gray-200">
            <span className="font-semibold text-gray-700">From:</span>
            <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-md text-sm border border-green-200">
              <Mail className="h-3 w-3" />
              {fromEmail}
            </span>
          </div>

          {/* To Emails */}
          <EmailAddressList emails={toEmails} label="To" />

          {/* CC Emails */}
          {ccEmails.length > 0 && (
            <EmailAddressList emails={ccEmails} label="CC" />
          )}

          {/* BCC Emails */}
          {bccEmails.length > 0 && (
            <EmailAddressList emails={bccEmails} label="BCC" />
          )}

          {/* Subject */}
          <div className="pt-2 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700">Subject:</span>
              <span className="text-gray-900 font-medium">{subject}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Email Content */}
      <div className="p-6">
        <div className="mb-6">
          <p className="text-gray-600 mb-2">
            Dear {recipientName},
          </p>
          <p className="text-gray-600">
            Please find the trading report below with detailed transaction information and export data.
          </p>
        </div>

        {/* Trading Data Table */}
        <Card className="overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    GILTSI Market Region
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Transaction Domain
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status Category
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Broker Contact
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Phone Numbers
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Firm Root ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Transaction ID
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tradeData.map((trade, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {trade.giltsi}
                    </td>
                    <td className="px-4 py-3 text-sm text-blue-600 font-mono">
                      {trade.transactionDomain}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        trade.statusCategory.includes('Description') 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {trade.statusCategory}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {trade.brokerEmailIds}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {trade.brokerPhoneNumbers}
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-blue-600">
                      {trade.firmRootId}
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-green-600">
                      {trade.transactionId}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">
            If you have any questions regarding this report, please don't hesitate to contact our trading desk.
          </p>
          <p className="text-sm text-gray-500">
            This is an automated report generated by the CSWISE trading system.
          </p>
        </div>
      </div>

      {/* Email Signature */}
      <div className="bg-gray-50 border-t border-gray-200 p-6">
        <div className="text-sm text-gray-600">
          <p className="font-semibold text-gray-900 mb-1">Trading Operations Team</p>
          <p>CSWISE Financial Services</p>
          <p>Email: trading@cswise.com | Phone: +1 (555) 123-4567</p>
          <p className="mt-2 text-xs text-gray-500">
            This email contains confidential and proprietary information. If you are not the intended recipient, 
            please notify the sender immediately and delete this email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
