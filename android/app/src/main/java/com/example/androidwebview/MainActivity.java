package com.example.androidwebview;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Context;
import android.content.ContextWrapper;
import android.content.MutableContextWrapper;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_main_backup);

        Context activityContext = getApplicationContext();

        WebView myWebView = new WebView(activityContext);
        WebSettings webSettings = myWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);


        setContentView(myWebView);

        myWebView.loadUrl("https://app-mitt-hbg.herokuapp.com/");


    }
}
