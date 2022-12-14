import * as Font from 'expo-font';
import { Roboto_500Medium, Roboto_900Black_Italic } from '@expo-google-fonts/roboto';

const useFonts = async () => {
  await Font.loadAsync({
    Roboto_medium: Roboto_500Medium,
    Roboto_bold: Roboto_900Black_Italic,
  });
};

export default useFonts;