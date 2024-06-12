package com.alexander.projectfirebase;

import android.app.Activity;
import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.bumptech.glide.Glide;

import java.util.List;


public class MessageAdapter extends ArrayAdapter<Message> {

    public MessageAdapter(Context context, int resource, List<Message> list) {
        super(context, resource, list);
    }


    @Override
    public View getView(int position,  View convertView, ViewGroup parent) {
        if (convertView ==null){
            convertView = ((Activity) getContext()).getLayoutInflater()
                    .inflate(R.layout.message_item, null);
        }

        ImageView photoImageView = convertView.findViewById(R.id.photoImageView);
        TextView textTextView = convertView.findViewById(R.id.textTextView);
        TextView nameTextView = convertView.findViewById(R.id.nameTextView);

        Message message = getItem(position);

        boolean isText = message.getImageUrl() == null;

        if (isText){
            textTextView.setVisibility(View.VISIBLE);

            textTextView.setText(message.getText());
        }else{
            textTextView.setVisibility(View.GONE);
            textTextView.setVisibility(View.VISIBLE);
            Glide.with(photoImageView.getContext())
                    .load(message.getImageUrl())
                    .into(photoImageView);
        }

        nameTextView.setText(message.getName());
        textTextView.setText(message.getText());
        return convertView;
    }
}
