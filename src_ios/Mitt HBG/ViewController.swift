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
}

fileprivate func setupWebView() {
    webView.uiDelegate = self
    webView.translatesAutoresizingMaskIntoConstraints = false
    DispatchQueue.main.async {
        guard let url = URL(string: "http://pwa-mitt-hbg.herokuapp.com/") else { return }
        self.webView.load(URLRequest(url: url))
    }
    view.addSubview(webView)
    webView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 0).isActive = true
    webView.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor, constant: 0).isActive = true
    webView.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor, constant: 0).isActive = true
    webView.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor, constant: 0).isActive = true
}}
