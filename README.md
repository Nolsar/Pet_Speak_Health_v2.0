# Pet_Speak_Health_v2.

[deployed app] https://pet-speak-health-v2.herokuapp.com/

STT documentation getting started
https://cloud.ibm.com/docs/speech-to-text?topic=speech-to-text-gettingStarted

https://cloud.ibm.com/docs/speech-to-text?topic=speech-to-text-basic-request

https://cloud.ibm.com/services/speech-to-text/crn%3Av1%3Abluemix%3Apublic%3Aspeech-to-text%3Aus-east%3Aa%2F81cad16071f44a4fb61b38e098f322d2%3A1cda85a8-e378-498d-967e-dc13234aef77%3A%3A?paneId=gettingStarted&new=true

curl -X POST -u "apikey:seFycMJ9kG8ANpY4fgmQXqXcfFTp1MPbTcyPTgC5ZDZT" \
--header "Content-Type: audio/flac" \
--data-binary @{path_to_file}audio-file.flac \
"https://api.us-east.speech-to-text.watson.cloud.ibm.com/instances/1cda85a8-e378-498d-967e-dc13234aef77/v1/recognize"
