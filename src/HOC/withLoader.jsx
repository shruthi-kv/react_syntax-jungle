import { useState } from 'react';


const withLoader = (WrappedComponent) => {

    return (props) => {
        const [loading, setLoading] = useState(true);

        setTimeout(() => {
            setLoading(false)

        }, 2000)

        return (
            loading ? 'loading' : <WrappedComponent {...props} />
        )

    }


}

export default withLoader;
