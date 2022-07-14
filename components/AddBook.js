import {View , Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity, Modal} from 'react-native';
import { useState } from 'react';

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
    return (
        <View style={styles.screen}>
            <Modal visible={modalVisible} animationType="slide" transparent={true}>
                <View style={styles.modal}>
                    <View style={styles.modalView}>
                        <View style={styles.modalTitle}>
                            <Text style={styles.modalTitleText}>{bookSelected.value}</Text>
                        </View>
                        <View style={styles.modalMessage}>
                            <Text>Are you sure you want to delete this book?</Text>
                        </View>
                        <View style={styles.modalMessage}>
                            <Text style={styles.modalItem}>{bookSelected.value}</Text>
                        </View>
                        <View style={styles.modalButton}>
                            <Button onPress={()=> onHandlerDeleteBook(bookSelected.id)} title="Delete" color="#841584" />
                        </View>
                        </View>
                </View>
            </Modal>
            <View style={styles.container}>
                <TextInput style= {styles.textinput} placeholder='Nombre' value={title} onChangeText={onHandleAddBook} />
                <Button title='Agregar' style={styles.addbutton} onPress={onHandleAddBookList} disabled={title.length < 1 ? true : false} />
                <FlatList
                    data={bookList}
                    renderItem={data => (
                        <TouchableOpacity onPress={() => onHandlerModal(data.item.id)} style={styles.title}>
                            <Text>{data.item.value}</Text>
                        </TouchableOpacity>
                    )}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={title => title.id.toString()}
                />
            </View>
        </View>
    );
    }
    const styles = StyleSheet.create({
        textinput: {
            borderWidth: 1,
            borderColor: 'black',
            padding: 10,
            margin: 10,
            width: '80%',
            borderRadius: 10,
        },
        addbutton: {
            backgroundColor: '#CBEFB6',
            borderRadius: 10,
            margin: 10,
            width: '80%',
        },
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#CBEFB6',
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
            backgroundColor: '#ccc',
            color: 'white',
            fontSize: 18,
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
