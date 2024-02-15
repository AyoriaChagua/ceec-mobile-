// moduleScreenStyles.ts
import { StyleSheet } from 'react-native';

export const moduleScreenStyles = StyleSheet.create({
  container: {
    flex: 1, // Make sure the container takes the entire screen height
    backgroundColor: '#F8F7FB', // Set background color to white
    paddingHorizontal: 12, // Add horizontal padding
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: '#EAEAED',
    marginBottom: 16,
    marginTop: 8, // Adjust top margin for better spacing
  },
  containercourse: {
    padding: 17,
  },
  courseImage: {
    width: '100%', // Adjust to take the full width
    height: 200,
    borderRadius: 10,
    marginBottom: 16, // Add bottom margin for separation
  },
  courseInfo: {
    marginTop: 13,
    marginBottom: 8, // Add bottom margin for separation
  },
  courseTitle: {
    color: '#4951FF', // Adjust text color
    fontSize: 24, // Decrease font size
    fontWeight: 'normal', // Set to normal font weight
    textAlign: 'center',
  },
  courseDescription: {
    fontSize: 14, // Decrease font size
    marginTop: 8,
    color: '#333333', // Adjust text color
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 16, // Decrease font size
    marginBottom: 8, // Add bottom margin for separation
  },
  
});
