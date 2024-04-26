using Microsoft.AspNetCore.Mvc;

namespace SmartSpender.Models
{
    public class FinanceController : Controller
    {
        // Assuming you have similar properties as in your Expense model
        public string Source { get; set; }
        public decimal Amount { get; set; }
        // Add any other properties you need to capture for income
    }
}
