import React, { useState } from 'react';
import { View, Text} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SelectComponent = ({onChange}) => {
  const [selectedOption, setSelectedOption] = useState('nao');

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    onChange(value)
  };

  return (
    <View>
      <Text>Selecione se é prioridade</Text>
      <Picker
        selectedValue={selectedOption}
        onValueChange={handleOptionChange}
      >
        <Picker.Item label="Sim" value="sim" />
        <Picker.Item label="Não" value="nao" />
      </Picker>
    </View>
  );
};

export default SelectComponent;
