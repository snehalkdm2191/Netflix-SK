import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ErrorText from '../../components/ErrorText';
import { auth, Providers } from '../../config/firebase';
import logging from '../../config/logging';

export default function ForgotPasswordPage() {
    const [sending, setSending] = useState<boolean>(false);
    const [sent, setSent] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');
    const history = useHistory();

    const resetPasswordRequest = () => {
        if (error !== '') setError('');

        setSending(true);

        Providers.sendPasswordResetEmail(auth,email)
        .then(() => {
            logging.info('Email sent.');
            setSent(true);
            setSending(false);
        })
        .catch(error => {
            logging.error(error);
            setError(error.message);
            setSending(false);
        });
    }

    return (
        <div id="SendPasswordReset" className="forgot-section">
            {sent ?
                <p>A link has been sent to your email with instructions.</p>
            :
                <>
                    <p>Please enter your email.</p>
                    <div className="form-group">
                        <input 
                            className="form-control"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            onChange={event => setEmail(event.target.value)}
                            value={email}
                        />
                    </div>
                    <button className="btn-logout-cancel" onClick={() => history.goBack()}>Cancel</button>
                    <button
                    className="btn-forgot-section"
                        disabled={sending}
                        color="success"
                        onClick={() => resetPasswordRequest()}
                    >
                        Send Reset Link
                    </button>
                    <ErrorText error={error} />
                </>
            }
        </div>
    );
}