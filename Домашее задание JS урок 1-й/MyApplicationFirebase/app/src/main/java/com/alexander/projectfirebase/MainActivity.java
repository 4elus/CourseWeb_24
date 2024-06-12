package com.alexander.projectfirebase;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.ListView;
import android.widget.Toast;

import com.google.firebase.database.ChildEventListener;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    ImageButton sendImageButton;
    ImageButton deleteImageButton;
    EditText messageEditText;
    Button sendMessageButton;
    String username;
    ListView messageListView;
    MessageAdapter adapter;
    FirebaseDatabase database;
    DatabaseReference myRef;
    ChildEventListener messageChildEventListener;
    ArrayList<Message> messageList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        sendImageButton = findViewById(R.id.sendPhotoButton);
        messageEditText = findViewById(R.id.messageEditText);
        sendMessageButton = findViewById(R.id.sendMessageButton);
        deleteImageButton = findViewById(R.id.imageDeleteButton);

        username = "Default user";
        messageListView = findViewById(R.id.messageListView);
        messageList = new ArrayList<>();

        adapter = new MessageAdapter(this, R.layout.message_item, messageList);
        messageListView.setAdapter(adapter);

        database = FirebaseDatabase.getInstance();
        myRef = database.getReference("message");



        sendMessageButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Message message = new Message();
                message.setText(messageEditText.getText().toString());
                message.setName(username);
                message.setImageUrl(null);

                myRef.push().setValue(message);
                messageEditText.setText("");
            }
        });

        deleteImageButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                FirebaseDatabase.getInstance().getReference("messsage").removeValue();
            }
        });

        messageChildEventListener = new ChildEventListener() {
            @Override
            public void onChildAdded(@NonNull DataSnapshot dataSnapshot, @Nullable String s) {
                Message message = dataSnapshot.getValue(Message.class);
                adapter.add(message);
            }

            @Override
            public void onChildChanged(@NonNull DataSnapshot dataSnapshot, @Nullable String s) {

            }

            @Override
            public void onChildRemoved(@NonNull DataSnapshot dataSnapshot) {
                Message message = dataSnapshot.getValue(Message.class);
                messageList.remove(message);
                adapter.notifyDataSetChanged();
            }

            @Override
            public void onChildMoved(@NonNull DataSnapshot dataSnapshot, @Nullable String s) {

            }

            @Override
            public void onCancelled(@NonNull DatabaseError databaseError) {

            }
        };

        myRef.addChildEventListener(messageChildEventListener);
    }
}