<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
class ContactController extends Controller
{
    public function send(Request $request)
    {
        $data = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        Mail::raw(
            "New Contact Message\n\n"
            . "Name: {$data['name']}\n"
            . "Email: {$data['email']}\n\n"
            . "Message:\n{$data['message']}",
            function ($mail) {
                $mail->to('service@shebzglobalsafety.com')
                     ->subject('New Contact Message');
            }
        );

        return redirect()->back()->with('success', 'Message sent successfully!');
    }
    public function quoteRequest(Request $request)
    {
        $data = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'company' => 'nullable|string|max:255',
            'phone'   => 'nullable|string|max:20',
            'service' => 'required|string|max:255',
            'message' => 'nullable|string',
        ]);

        $emailBody =
            "New Quote Request\n\n"
            . "Name: {$data['name']}\n"
            . "Email: {$data['email']}\n"
            . "Company: " . ($data['company'] ?? 'N/A') . "\n"
            . "Phone: " . ($data['phone'] ?? 'N/A') . "\n"
            . "Service: {$data['service']}\n\n"
            . "Message:\n"
            . ($data['message'] ?? 'N/A');

        Mail::raw($emailBody, function ($mail) use ($data) {
            $mail->to('service@shebzglobalsafety.com')
                ->replyTo($data['email'])
                ->subject('New Quote Request');
        });

        return back()->with('success', 'Quote request submitted successfully!');
    }
}
