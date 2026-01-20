import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import CustomerPage from "./pages/CustomerPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import EnquiryDetailPage from "./pages/EnquiryDetailPage";
import InspectorPage from "./pages/InspectorPage";
import InspectorDetailPage from "./pages/InspectorDetailPage";
import InspectionCompanyPage from "./pages/InspectionCompanyPage";
import InspectionCompanyDetailPage from "./pages/InspectionCompanyDetailPage";
import AllCustomersPage from "./pages/AllCustomersPage";
import AllInspectorsPage from "./pages/AllInspectorsPage";
import AllCompaniesPage from "./pages/AllCompaniesPage";
import AllEnquiriesPage from "./pages/AllEnquiriesPage";

export default function Admin() {
  const customers = [
    {
      id: "CUST001",
      name: "John Smith",
      location: "New York",
      recentEnquiries: 3,
      date: "2026-01-14",
      budget: "$5000",
    },
    {
      id: "CUST002",
      name: "Jane Doe",
      location: "Los Angeles",
      recentEnquiries: 5,
      date: "2026-02-20",
      budget: "$7000",
    },
  ];

  const inspectors = [
    {
      id: "INS001",
      name: "Inspector A",
      specialization: "Electrical",
      enquiriesHandled: 10,
    },
    {
      id: "INS002",
      name: "Inspector B",
      specialization: "Mechanical",
      enquiriesHandled: 7,
    },
  ];

  const companies = [
    {
      id: "COMP001",
      name: "Inspection Co.",
      location: "Chicago",
      numberOfInspectors: 15,
    },
    {
      id: "COMP002",
      name: "Quality Checks Ltd.",
      location: "Houston",
      numberOfInspectors: 8,
    },
  ];

  const enquiries = [
    {
      id: "ENQ001",
      customerId: "CUST001",
      details: "Request for inspection of electrical wiring",
    },
    {
      id: "ENQ002",
      customerId: "CUST002",
      details: "Mechanical equipment inspection",
    },
  ];

  const [currentPage, setCurrentPage] = useState("landing");
  const [roleContext, setRoleContext] = useState("landing");
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [selectedInspectorId, setSelectedInspectorId] = useState(null);
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [previousPage, setPreviousPage] = useState("landing");

  // Navigation functions
  const navigateToCustomerDetail = (customerId) => {
    setSelectedCustomerId(customerId);
    setCurrentPage("customer-detail");
  };

  const navigateToInspectorDetail = (inspectorId) => {
    setSelectedInspectorId(inspectorId);
    setCurrentPage("inspector-detail");
  };

  const navigateToCompanyDetail = (companyId) => {
    setSelectedCompanyId(companyId);
    setCurrentPage("company-detail");
  };

  const navigateToEnquiryDetail = (enquiry, fromPage) => {
    setSelectedEnquiry(enquiry);
    setPreviousPage(fromPage);
    setCurrentPage("enquiry-detail");
  };

  const navigateToCustomerPage = () => {
    setRoleContext("customer");
    setCurrentPage("customer");
  };

  const navigateToInspectorPage = () => {
    setRoleContext("inspector");
    setCurrentPage("inspector");
  };

  const navigateToCompanyPage = () => {
    setRoleContext("company");
    setCurrentPage("company");
  };

  const navigateToLanding = () => {
    setRoleContext("landing");
    setCurrentPage("landing");
  };

  const navigateBack = (targetPage) => {
    setCurrentPage(targetPage);
  };

  // Sidebar item handlers
  const handleCustomerSidebarClick = (item) => {
    if (item === "All Customers") {
      setCurrentPage("all-customers");
    } else if (item === "All Enquiries") {
      setCurrentPage("all-enquiries");
    }
  };

  const handleInspectorSidebarClick = (item) => {
    if (item === "All Inspectors") {
      setCurrentPage("all-inspectors");
    } else if (item === "All Enquiries") {
      setCurrentPage("all-enquiries");
    }
  };

  const handleCompanySidebarClick = (item) => {
    if (item === "All Companies") {
      setCurrentPage("all-companies");
    } else if (item === "All Enquiries") {
      setCurrentPage("all-enquiries");
    }
  };

  const getSidebarItems = (context) => {
    switch (context) {
      case "customer":
        return [
          "All Customers",
          "All Enquiries",
          "Chat",
          "Payments",
          "Reports",
        ];
      case "inspector":
        return [
          "All Inspectors",
          "All Enquiries",
          "Chat",
          "Payments",
          "Reports",
        ];
      case "company":
        return [
          "All Companies",
          "All Enquiries",
          "Chat",
          "Payments",
          "Reports",
        ];
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === "landing" && (
        <LandingPage
          onNavigateToCustomers={navigateToCustomerPage}
          onNavigateToInspectors={navigateToInspectorPage}
          onNavigateToCompanies={navigateToCompanyPage}
          onNavigateToAllEnquiries={() => {
            setRoleContext("customer");
            setCurrentPage("all-enquiries");
          }}
          onNavigateToEnquiryDetail={(enq) =>
            navigateToEnquiryDetail(enq, "landing")
          }
        />
      )}
      {currentPage === "customer" && (
        <CustomerPage
          onNavigateToDetail={navigateToCustomerDetail}
          onNavigateToEnquiryDetail={(enq) =>
            navigateToEnquiryDetail(enq, "customer")
          }
          onNavigateBack={navigateToLanding}
          onSidebarItemClick={handleCustomerSidebarClick}
        />
      )}
      {currentPage === "customer-detail" && selectedCustomerId && (
        <CustomerDetailPage
          customerId={selectedCustomerId}
          onNavigateBack={navigateToCustomerPage}
        />
      )}
      {currentPage === "inspector" && (
        <InspectorPage
          onNavigateToDetail={navigateToInspectorDetail}
          onNavigateToEnquiryDetail={(enq) =>
            navigateToEnquiryDetail(enq, "inspector")
          }
          onNavigateBack={navigateToLanding}
          onSidebarItemClick={handleInspectorSidebarClick}
        />
      )}
      {currentPage === "inspector-detail" && selectedInspectorId && (
        <InspectorDetailPage
          inspectorId={selectedInspectorId}
          onNavigateBack={navigateToInspectorPage}
        />
      )}
      {currentPage === "company" && (
        <InspectionCompanyPage
          onNavigateToDetail={navigateToCompanyDetail}
          onNavigateToEnquiryDetail={(enq) =>
            navigateToEnquiryDetail(enq, "company")
          }
          onNavigateBack={navigateToLanding}
          onSidebarItemClick={handleCompanySidebarClick}
        />
      )}
      {currentPage === "company-detail" && selectedCompanyId && (
        <InspectionCompanyDetailPage
          companyId={selectedCompanyId}
          onNavigateBack={navigateToCompanyPage}
        />
      )}
      {currentPage === "enquiry-detail" && selectedEnquiry && (
        <EnquiryDetailPage
          enquiry={selectedEnquiry}
          onNavigateBack={() => navigateBack(previousPage)}
        />
      )}
      {currentPage === "all-customers" && (
        <AllCustomersPage
          customers={customers}
          onNavigateToDetail={navigateToCustomerDetail}
          onNavigateBack={() =>
            navigateBack(
              roleContext === "customer"
                ? "customer"
                : "landing"
            )
          }
          sidebarItems={getSidebarItems(roleContext)}
          onSidebarItemClick={
            roleContext === "customer"
              ? handleCustomerSidebarClick
              : undefined
          }
        />
      )}
      {currentPage === "all-inspectors" && (
        <AllInspectorsPage
          inspectors={inspectors}
          onNavigateToDetail={navigateToInspectorDetail}
          onNavigateBack={() =>
            navigateBack(
              roleContext === "inspector"
                ? "inspector"
                : "landing"
            )
          }
          sidebarItems={getSidebarItems(roleContext)}
          onSidebarItemClick={
            roleContext === "inspector"
              ? handleInspectorSidebarClick
              : undefined
          }
        />
      )}
      {currentPage === "all-companies" && (
        <AllCompaniesPage
          companies={companies}
          onNavigateToDetail={navigateToCompanyDetail}
          onNavigateBack={() =>
            navigateBack(
              roleContext === "company" ? "company" : "landing"
            )
          }
          sidebarItems={getSidebarItems(roleContext)}
          onSidebarItemClick={
            roleContext === "company"
              ? handleCompanySidebarClick
              : undefined
          }
        />
      )}
      {currentPage === "all-enquiries" && (
        <AllEnquiriesPage
          enquiries={enquiries}
          onNavigateToDetail={(enq) =>
            navigateToEnquiryDetail(enq, "all-enquiries")
          }
          onNavigateBack={() => {
            if (roleContext === "customer")
              navigateBack("customer");
            else if (roleContext === "inspector")
              navigateBack("inspector");
            else if (roleContext === "company")
              navigateBack("company");
            else navigateBack("landing");
          }}
          sidebarItems={getSidebarItems(roleContext)}
          onSidebarItemClick={
            roleContext === "customer"
              ? handleCustomerSidebarClick
              : roleContext === "inspector"
                ? handleInspectorSidebarClick
                : roleContext === "company"
                  ? handleCompanySidebarClick
                  : undefined
          }
          roleContext={roleContext}
        />
      )}
    </div>
  );
}
