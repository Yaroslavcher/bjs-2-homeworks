"use strict";
class AlarmClock {
    constructor(alarmCollection = [], intervalId) {
        this.alarmCollection = alarmCollection;
        this.intervalId = intervalId;
    }

    addClock(time, callback) {
        
        let func = () => callback();

        /*if (time === undefined || callback === undefined) {
            throw new Error("Отсутствуют обязательные аргументы");
        }*/

        if (time in this.alarmCollection) {
            console.warn('Уже присутствует звонок на это же время')
        }

            
        this.alarmCollection.push({id: null, time, canCall: true});
    }

    removeClock(time) {           //удаляет звонок с определенным временем time
        let alarmCollectionBeforeRemove = this.alarmCollection.length;    
        const result = this.alarmCollection.filter(removedClock => removedClock[time] === time);
            if (alarmCollectionBeforeRemove > this.alarmCollection.length) {
                return console.log("Звонок №${id} удален.");
            }
        }
    
    getCurrentFormattedTime(){  //возвращает текущее время как строку "ЧЧ:ММ"
        let fmt = t => ("" + t).padStart(2, '0');
        let currFormattedTime = fmt(new Date().getHours()) + ":" + fmt(new Date().getMinutes());
        return currFormattedTime;
    }

    start() {
        /*function checkClock() {
            let clockTime = this.alarmCollection[time];
            if (getCurrentFormattedTime() === clockTime) {
                this.callback();
            }*/

        if (this.intervalId !== undefined) {
                return; 
            }
        this.intervalId = setInterval(this.alarmCollection.forEach(time => {
            if (this.alarmCollection.time === getCurrentFormattedTime() && this.alarmCollection.canCall) {
                this.alarmCollection.canCall = false;
                callback();
            }}), 1000)

    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.canCall.forEach(canCall => {canCall = true});
    }

    clearAlarms() {
        this.stop;
        this.alarmCollection = [];
    }
}
    

