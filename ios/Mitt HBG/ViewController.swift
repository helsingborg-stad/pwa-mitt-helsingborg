//
//  ViewController.swift
//  Mitt HBG
//
//  Created by Ehsan Zilaei on 2020-01-30.
//  Copyright © 2020 Ehsan Zilaei. All rights reserved.
//

import UIKit
import WebKit

//class ViewController: UIViewController, WKUIDelegate {
//
//var webView: WKWebView!
//
//override func loadView() {
//    let webConfiguration = WKWebViewConfiguration()
//
//
//    webView = WKWebView(frame: .zero, configuration: webConfiguration)
//    webView.uiDelegate = self
//
//    view = webView
//}
//override func viewDidLoad() {
//    super.viewDidLoad()
//
//    let myURL = URL(string:"https://pwa-mitt-hbg.herokuapp.com/")
//    let myRequest = URLRequest(url: myURL!)
//    webView.load(myRequest)
//}}


class ViewController: UIViewController, WKUIDelegate {

    let webView = WKWebView()

    override func viewDidLoad() {
        super.viewDidLoad()
        setupWebView()
     
        // TODO: Resize view correctly on keyboard events
        NotificationCenter.default.addObserver(self, selector: #selector(self.keyboardWillShow), name: UIResponder.keyboardWillShowNotification, object: nil)
        NotificationCenter.default.addObserver(self, selector: #selector(self.keyboardWillHide), name: UIResponder.keyboardWillHideNotification, object: nil)
    }
        
    @objc func keyboardWillShow(notification: NSNotification)
    {
        // Not working, wanted behaviour: shrink height based on keyboard height
//        if let keyboardHeight = (notification.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? NSValue)?.cgRectValue.height {
//            webView.scrollView.contentInset = UIEdgeInsets(top: 0, left: 0, bottom: keyboardHeight, right: 0)
//        }
//        print("keyboardWillShow")
    }

    @objc func keyboardWillHide(notification: NSNotification)
    {
//        UIView.animate(withDuration: 0.2, animations: {
//            // For some reason adding inset in keyboardWillShow is animated by itself but removing is not, that's why we have to use animateWithDuration here
//            self.webView.scrollView.contentInset = UIEdgeInsets(top: 0, left: 0, bottom: 0, right: 0)
//        })
//        print("keyboardWillHide")
    }

    fileprivate func setupWebView() {
        webView.uiDelegate = self
        webView.translatesAutoresizingMaskIntoConstraints = false
        
        // Set custom user agent
        webView.evaluateJavaScript("navigator.userAgent") { (defaultUserAgent, error) in
            self.webView.customUserAgent = "\(String(describing: defaultUserAgent)) MittHbg/0.6.0"; // TODO: Get version number from package.json
        }
        
        DispatchQueue.main.async {
            guard let url = URL(string: "https://app-mitt-hbg.herokuapp.com/") else { return }  // TODO: Get URL dynamically from enviroment
            self.webView.load(URLRequest(url: url))
        }
        
        view.addSubview(webView)
        
        // Set webView constrains based on safeAreaLayoutGuide
        webView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 0).isActive = true
        webView.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor, constant: 0).isActive = true
        webView.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor, constant: 0).isActive = true
        webView.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor, constant: 0).isActive = true
        
        // Uncomment below to disable scroll in webview, enable when screen reiszing is working as expected
        // webView.scrollView.isScrollEnabled = false
    }
}
