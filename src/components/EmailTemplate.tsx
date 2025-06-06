
import React from 'react';
import { Card } from '@/components/ui/card';
import { Mail, Download, FileAudio, FileImage, FileVideo } from 'lucide-react';

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

interface Attachment {
  name: string;
  size: string;
  type: 'document' | 'image' | 'audio' | 'video';
  url?: string;
}

interface EmailTemplateProps {
  recipientName?: string;
  fromEmail?: string;
  toEmails: string[];
  ccEmails?: string[];
  bccEmails?: string[];
  subject?: string;
  tradeData: TradeData[];
  attachments?: Attachment[];
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  recipientName = "Trading Team",
  fromEmail = "system@company.com",
  toEmails,
  ccEmails = [],
  bccEmails = [],
  subject = "CSWISE Trading Report",
  tradeData,
  attachments = []
}) => {
  const EmailAddressList = ({ emails, label }: { emails: string[], label: string }) => (
    <div className="email-address-row">
      <div className="flex items-start gap-2">
        <span className="email-address-label">{label}:</span>
        <div className="flex-1">
          <div className="email-tags-container">
            {emails.map((email, index) => (
              <span
                key={index}
                className="email-tag"
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

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <FileImage className="h-4 w-4" />;
      case 'audio':
        return <FileAudio className="h-4 w-4" />;
      case 'video':
        return <FileVideo className="h-4 w-4" />;
      default:
        return <Download className="h-4 w-4" />;
    }
  };

  const handleDownload = (attachment: Attachment) => {
    if (attachment.url) {
      // Create a temporary link element and trigger download
      const link = document.createElement('a');
      link.href = attachment.url;
      link.download = attachment.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Fallback for demo purposes
      console.log(`Downloading ${attachment.name}`);
    }
  };

  return (
    <div className="email-template">
      {/* Email Header */}
      <div className="email-header">
        <div className="space-y-4">
          {/* From Email */}
          <div className="email-divider">
            <div className="flex items-center gap-2">
              <span className="email-address-label">From:</span>
              <span className="email-tag from">
                <Mail className="h-3 w-3" />
                {fromEmail}
              </span>
            </div>
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
          <div className="subject-row">
            <div className="flex items-center gap-2">
              <span className="subject-label">Subject:</span>
              <span className="subject-text">{subject}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Email Content */}
      <div className="email-content">
        <div className="content-intro">
          <p className="intro-text">
            Dear {recipientName},
          </p>
          <p className="intro-text">
            Please find the trading report below with detailed transaction information and export data.
          </p>
        </div>

        {/* Attachments Section */}
        {attachments.length > 0 && (
          <div className="attachments-section">
            <h3 className="attachments-title">Attachments ({attachments.length})</h3>
            <div className="card">
              <div className="card-content">
                <div className="attachments-grid">
                  {attachments.map((attachment, index) => (
                    <div
                      key={index}
                      className="attachment-item"
                    >
                      <div className="attachment-info">
                        <div className="attachment-icon">
                          {getFileIcon(attachment.type)}
                        </div>
                        <div>
                          <p className="attachment-name">{attachment.name}</p>
                          <p className="attachment-size">{attachment.size}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDownload(attachment)}
                        className="download-button"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Trading Data Table */}
        <div className="card">
          <div className="table-container">
            <table className="data-table">
              <thead className="table-header">
                <tr>
                  <th className="table-header-cell">
                    GILTSI Market Region
                  </th>
                  <th className="table-header-cell">
                    Transaction Domain
                  </th>
                  <th className="table-header-cell">
                    Status Category
                  </th>
                  <th className="table-header-cell">
                    Broker Contact
                  </th>
                  <th className="table-header-cell">
                    Phone Numbers
                  </th>
                  <th className="table-header-cell">
                    Firm Root ID
                  </th>
                  <th className="table-header-cell">
                    Transaction ID
                  </th>
                </tr>
              </thead>
              <tbody className="table-body">
                {tradeData.map((trade, index) => (
                  <tr key={index} className="table-row">
                    <td className="table-cell">
                      {trade.giltsi}
                    </td>
                    <td className="table-cell font-mono text-blue-600">
                      {trade.transactionDomain}
                    </td>
                    <td className="table-cell">
                      <span className={`status-badge ${
                        trade.statusCategory.includes('Description') 
                          ? 'description' 
                          : 'other'
                      }`}>
                        {trade.statusCategory}
                      </span>
                    </td>
                    <td className="table-cell text-gray-600">
                      {trade.brokerEmailIds}
                    </td>
                    <td className="table-cell text-gray-600">
                      {trade.brokerPhoneNumbers}
                    </td>
                    <td className="table-cell font-mono text-blue-600">
                      {trade.firmRootId}
                    </td>
                    <td className="table-cell font-mono text-green-600">
                      {trade.transactionId}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="email-footer">
          <p className="footer-text">
            If you have any questions regarding this report, please don't hesitate to contact our trading desk.
          </p>
          <p className="footer-subtext">
            This is an automated report generated by the CSWISE trading system.
          </p>
        </div>
      </div>

      {/* Email Signature */}
      <div className="email-signature">
        <div className="signature-content">
          <p className="signature-name">Trading Operations Team</p>
          <p>CSWISE Financial Services</p>
          <p>Email: trading@cswise.com | Phone: +1 (555) 123-4567</p>
          <p className="signature-disclaimer">
            This email contains confidential and proprietary information. If you are not the intended recipient, 
            please notify the sender immediately and delete this email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
