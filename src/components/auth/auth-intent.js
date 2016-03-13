const intent = ({firebase}) => {

    const uid$ = firebase.get('$user');

    return {
      uid$
    }
}
export default intent;
