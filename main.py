def on_button_pressed_a():
    global message_index
    message_index = 1 + message_index
    if message_index == len(messages):
        message_index = 0
    basic.show_string("" + (messages[message_index]))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    basic.show_string(receivedString)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    radio.send_string("" + (messages[message_index]))
input.on_button_pressed(Button.B, on_button_pressed_b)

message_index = 0
messages: List[str] = []
radio.set_group(123)
messages = ["Bok", "Kako si", "Dobro", "Idemo van"]
message_index = 0
basic.show_string("" + (messages[message_index]))