import React from "react";
import { Text } from "react-native";
import {Avatar, Button, Card, Title, Paragraph} from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {}}) =>{
 const {
        name = 'test restaurant',
        icon,
        photo = [ "https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" ],
        address = "100 bechar algerie",
        openingHours = true,
        rating = 4,
        isClosedTemporarily 
    } = restaurant;
    return  (
      <Card>
        
        <Card.Cover source={{ uri: photo[0] }} />
        <Card.Content>
          <Title>{name}</Title>
          <Paragraph>{address}</Paragraph>
        </Card.Content>
      </Card>
    );
    
    
};