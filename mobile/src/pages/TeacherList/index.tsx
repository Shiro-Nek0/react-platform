import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import PageHeader from '../../components/PageHeader';
import styles from './styles';
import TeacherItem from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

function TeacherList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    return (
        <View style={styles.container}>
            
            <ScrollView style={styles.teacherList}>
                <PageHeader 
                    title="Proffys disponíveis" 
                    headerRight={(
                        <BorderlessButton onPress={handleToggleFiltersVisible}>
                            <Feather name="filter" size={20} color="#fff" />
                        </BorderlessButton>
                    )}
                >
                    { isFiltersVisible && (
                        <View style={styles.searchForm} >
                            <Text style={styles.label}>Matéria</Text>
                            <TextInput style={styles.input} placeholder="Qual a Matéria?" placeholderTextColor="#c1bccc"/>

                            <View style={styles.inputGroup}>
                                <View style={styles.inputBlock}>
                                    <Text style={styles.label}>Dia da Semana</Text>
                                    <TextInput style={styles.input} placeholder="Qual o dia?" placeholderTextColor="#c1bccc"/>
                                </View>

                                <View style={styles.inputBlock}>
                                    <Text style={styles.label}>Horário</Text>
                                    <TextInput style={styles.input} placeholder="Qual Horário?" placeholderTextColor="#c1bccc"/>
                                </View>
                            </View>

                            <RectButton style={styles.submitButton}>
                                <Text style={styles.submitButtonText}>Filtrar</Text>
                            </RectButton>
                        </View>
                    )}
                </PageHeader>

                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    )
}

export default TeacherList;