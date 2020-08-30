import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import PageHeader from '../../components/PageHeader';
import styles from './styles';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function handleFiltersSubmit() {
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });

        setIsFiltersVisible(false);
        setTeachers(response.data);
    }


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
                            <TextInput 
                                style={styles.input}
                                value={subject}
                                onChangeText={text => setSubject(text)}
                                placeholder="Qual a Matéria?"
                                placeholderTextColor="#c1bccc"
                            />

                            <View style={styles.inputGroup}>
                                <View style={styles.inputBlock}>
                                    <Text style={styles.label}>Dia da Semana</Text>
                                    <TextInput 
                                        style={styles.input}
                                        value={week_day}
                                        onChangeText={text => setWeekDay(text)}
                                        placeholder="Qual o dia?" 
                                        placeholderTextColor="#c1bccc"
                                    />
                                </View>

                                <View style={styles.inputBlock}>
                                    <Text style={styles.label}>Horário</Text>
                                    <TextInput 
                                        style={styles.input}
                                        value={time}
                                        onChangeText={text => setTime(text)}
                                        placeholder="Qual Horário?" 
                                        placeholderTextColor="#c1bccc"
                                    />
                                </View>
                            </View>

                            <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                                <Text style={styles.submitButtonText}>Filtrar</Text>
                            </RectButton>
                        </View>
                    )}
                </PageHeader>

                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
            </ScrollView>
        </View>
    )
}

export default TeacherList;