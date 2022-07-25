import {View , Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity, Modal} from 'react-native';
import { useState } from 'react';
import Profile from './pages/Profile';
import Colors from '../constants/Colors';

export function AddBook() {
        const [title, setTitle] = useState('');
        const [bookList, setBookList] = useState([]);
        const [modalVisible, setModalVisible] = useState(false);
        const [bookSelected, setBookSelected] = useState('');

        const onHandleAddBook = (title) => setTitle(title);
        const onHandleAddBookList = () => {
            setBookList(currentBookList => [...currentBookList, {id: Date.now(), value: title}]);
            setTitle('');
        }
        const onHandlerDeleteBook = (id) => {
            setBookList(currentBookList => currentBookList.filter(book => book.id !== id));
            setBookSelected({});
            setModalVisible(!modalVisible);
        }
        const onHandlerModal = id => {
            setBookSelected(bookList.find(book => book.id === id));
            setModalVisible(!modalVisible);
        }
        const onHandlerCancel = () => {
            setBookSelected({});
            setModalVisible(!modalVisible);
        }

        const [goProfile, setGoProfile] = useState(false);
        function onHandlerGoToProfile () {
            setGoProfile(true);
        }
        if(goProfile) return <Profile />



    return (
        <View style={styles.screen}>
            <Modal visible={modalVisible} animationType="slide" transparent={true}>
                <View style={styles.modal}>
                    <View style={styles.modalView}>
                        <View style={styles.modalTitle}>
                            <Text style={styles.modalTitleText}>{bookSelected.value}</Text>
                        </View>
                        <View style={styles.modalMessage}>
                            <Text>Book Information</Text>
                        </View>
                        <View style={styles.modalMessage}>
                            <Text style={styles.modalItem}>{bookSelected.value}</Text>
                        </View>
                        <View>
                            <Text>Aca va la imagen</Text>
                        </View>
                        <View style={styles.modalButton}>
                            <Button onPress={()=> onHandlerDeleteBook(bookSelected.id)} title="Delete" color="#841584" />
                        </View>
                        <View style={styles.modalButton}>
                            <Button onPress={()=> onHandlerCancel()} title="Cancel" color="#841584" />
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.containeraddbook}>
                <TextInput style= {styles.textinput} placeholder='Nombre' value={title} onChangeText={onHandleAddBook} />
                <Button title='Agregar' style={styles.addbutton} onPress={onHandleAddBookList} disabled={title.length < 1 ? true : false} />
                <FlatList style={styles.flatlist}
                    data={bookList}
                    renderItem={data => (
                        <TouchableOpacity onPress={() => onHandlerModal(data.item.id)} style={styles.title}>
                            <Text>{data.item.value}</Text>
                        </TouchableOpacity>
                    )}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={title => title.id.toString()}
                />
                <Button title="Go to Profile" onPress={onHandlerGoToProfile} />
            </View>
        </View>
    );
    }
    const styles = StyleSheet.create({
        screen: {
            flex: 1,
            backgroundColor: Colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
        },
        containeraddbook: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
        },
        textinput: {
            width: 300,
            height: 50,
            borderColor: '#000',
            borderWidth: 1,
            padding: 10,
            margin: 10,
            borderRadius: 10,
        },
        addbutton: {
            width: '80%',
            margin: 10,
            borderRadius: 10,
        },
        flatlist: {
            width: 300,
            margin: 10,
            borderRadius: 10,
            fontFamily: 'InterBold',
        },
        title: {
            width: '80%',
            margin: 10,
            borderRadius: 10,
            fontFamily: "InterRegular",
        },
        modal: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)'
        },  
        modalView: {
            backgroundColor: 'white',
            width: '80%',
            height: '50%',
            borderRadius: 10,
            padding: '10%',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
        },
        modalTitle: {
            backgroundColor: Colors.secondary,
            color: 'white',
            fontSize: 18,
        },
        modalTitleText: {
            fontSize: 20,
            color: Colors.letterPrincipal,
        },
        modalMessage: {
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center'
        },
        modalButton: {
            marginTop: 15,
        },
        modalItem: {
            fontSize: 30
        }
    });
