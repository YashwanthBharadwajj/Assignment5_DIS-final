using Microsoft.AspNetCore.Mvc;
using SmartSpender.Models;
using System.Collections.Generic;
using SmartSpender.Models; // Update to your actual namespace

public class FinanceController : Controller
{
    // Static list to simulate database storage
    public static List<Expense> Expenses = new List<Expense>();

    public IActionResult ExpenseDetails()
    {
        return View(new Expense());
    }

    [HttpPost]
    public IActionResult SaveExpense(Expense expense)
    {
        if (ModelState.IsValid)
        {
            Expenses.Add(expense);
            return RedirectToAction("ExpenseOverview");
        }
        return View("ExpenseDetails", expense);
    }

    public IActionResult ExpenseOverview()
    {
        // Pass the list of expenses to the view
        return View(Expenses);
    }

    public IActionResult Income()
    {
        return View();
    }

}
