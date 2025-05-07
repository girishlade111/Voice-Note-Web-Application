const VoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const recognition = useRef<any>(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      recognition.current = new (window as any).webkitSpeechRecognition();
      recognition.current.continuous = false;
      recognition.current.interimResults = true;
    }
  }, []);

  const toggleRecording = () => {
    if (isRecording) {
      recognition.current?.stop();
    } else {
      recognition.current?.start();
    }
    setIsRecording(!isRecording);
  };

  return (
    <button 
      className={`mic-button ${isRecording ? 'pulsing' : ''}`}
      onClick={toggleRecording}
      aria-label={isRecording ? 'Stop recording' : 'Start recording'}
    />
  );
};