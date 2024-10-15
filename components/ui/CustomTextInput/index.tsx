import { StyleSheet, TextInput, View } from "react-native";
import { FC } from "react";
import { Text } from "@ui-kitten/components";

// TODO: type handleChange & values
interface ICustomTextInputProps {
  handleChange: any;
  value: string;
  title: string;
  name: string;
  num?: boolean;
  error: string | undefined;
  textarea?: boolean;
}

const CustomTextInput: FC<ICustomTextInputProps> = ({
  name,
  error,
  handleChange,
  value,
  title,
  num,
  textarea,
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}:</Text>
      <TextInput
        style={[
          styles.textInput,
          error ? { borderColor: "red" } : {},
          textarea ? { height: 150 } : {},
        ]}
        onChangeText={handleChange(name)}
        value={value}
        keyboardType={num ? "numeric" : "default"}
        textAlignVertical="top"
        multiline={textarea}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
  },
  textInput: {
    height: 40,
    padding: 10,
    fontSize: 13,
    borderWidth: 1,
  },
  error: {
    marginTop: 5,
    fontSize: 14,
    color: "red",
    fontWeight: "500",
  },
});

export default CustomTextInput;
