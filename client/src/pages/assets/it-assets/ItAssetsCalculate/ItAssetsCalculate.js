import { useState, useEffect } from 'react'
import './ItAssetsCalculate.styles.scss'

export const ItAssetsCalculate = () => {
    function calcMark_1(event) {
        event.preventDefault();
        const result = parseInt(inputs.num1) + parseInt(inputs.num2)
        handleInputs({ result: result })
    }

    function calcMark_2(event) {
        event.preventDefault();
        const result = parseInt(indicator2b.num1) * parseInt(indicator2b.num2)
        handleIndicator2b({ result: result })
    }

    // handleChange({ ...inputs, [e.target.name]: e.target.value })

    const [inputs, handleInputs] = useState({
        num1: null,
        num2: null,
        result: null,
    })

    const [indicator2b, handleIndicator2b] = useState({
        num1: null,
        num2: null,
        result: null,
    })
    const [card2a, handleCard2a] = useState({
        card: 'Категория отсутствует'
    })



    let indicator = ''
    if (inputs.result >= 1 && inputs.result <= 50) {
        indicator = 'III категория значимости'
    } else if (inputs.result > 50 && inputs.result <= 500) {
        indicator = 'II категория значимости'
    } else if (inputs.result > 500) {
        indicator = 'I категория значимости'
    } else {
        indicator = 'Категория отсутствует'
    }

    let indicator2b_title = ''
    if (indicator2b.result >= 2 && indicator2b.result < 1000) {
        indicator2b_title = 'III категория значимости'
    } else if (indicator2b.result >= 1000 && indicator2b.result < 5000) {
        indicator2b_title = 'II категория значимости'
    } else if (indicator2b.result >= 5000) {
        indicator2b_title = 'I категория значимости'
    } else {
        indicator2b_title = 'Категория отсутствует'
    }

    return (
        <div>
            <h1>Калькулятор критических объектов КИИ</h1>

            <div className="calculation-card">
                <div className="calculation-card-header">
                    <h3>Показатель 1</h3>
                </div>

                <form onSubmit={calcMark_1}>
                    <h2 style={{ textAlign: 'center', color: 'tomato' }}>{indicator}</h2>
                    <h2>Показатель №1 = {inputs.num1 ? inputs.num1 : `N уж`} + {inputs.num2 ? inputs.num2 : `N уз`} </h2>

                    <p><i><b>Nуж</b> - прогнозируемое количество погибших людей в наиболее опасной ситуации с наихудшим сценарием, воникающей в результате совершения компьютерной атаки на категорируемый объект КИИ, исчисляется в количетве человек (чел.)</i></p>

                    <p><i><b>Nуз</b> - прогноизируемое количество людей, которым будет причинен вред здоровью в наиболее опасной ситации с наихудшим сценарием, возникающей в результате совершения компьютерной атаки на категорируемый объект КИИ, исчисляется в количестве человек (чел.)</i></p>
                    <div className='form-group'>
                        <label htmlFor="num1">N уж</label>
                        <input
                            name='num1'
                            value={inputs.num1}
                            type='text'
                            id='num1'
                            autoComplete="off"
                            placeholder="N уж"
                            onChange={(e) => handleInputs({ ...inputs, num1: e.target.value })} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="num2">N уз</label>
                        <input
                            name='num2'
                            value={inputs.num2}
                            type='text'
                            id='num2'
                            autoComplete="off"
                            placeholder="N уз"
                            onChange={(e) => handleInputs({ ...inputs, num2: e.target.value })} />
                    </div>
                    <div className="calculation-card-footer">
                        <button type="submit">
                            Вычислить
                        </button>
                    </div>
                </form>
            </div>

            <div className="calculation-card">
                <h3>{`Показатель 2 (2а)`}</h3>
                <h2 style={{ textAlign: 'center', color: 'tomato' }}>{card2a.card}</h2>
                <div className="calculation-card-2a" onClick={() => handleCard2a({ card: 'III категория' })}>
                    <p><b>Границы территории, на которой возможно нарушение обеспечения
                    жизнедеятельности населения, возникающее в результате совершения
                    компьютерной атаки на категорируемый объект КИИ, расположены в пределах
                    территории:</b></p>
                    <ul>
                        <li>(1) городского поселения численностью от 2 000 человек;</li>
                        <li>(2) сельского поселения численностью от 2 000 человек;</li>
                        <li>(3) муниципального района численностью от 2 000 человек;</li>
                        <li>(4) муниципального округа численностью от 2 000 человек;</li>
                        <li>(5) городского округа численностью от 2 000 человек;</li>
                        <li>(б) городского округа с внутригородским делением численностью от 2 000 человек;</li>
                        <li>(7) внутригородского района численностью от человек;</li>
                        <li>(8) внутригородской территории города федерального значения.</li>
                    </ul>
                </div>
                <div className="calculation-card-2a" onClick={() => handleCard2a({ card: 'II категория' })}>
                    <p><b>Границы территории, на которой возможно нарушение обеспечения
                    жизнедеятельности населения, возникающее
                    результате совершения
                    компьютерной атаки на категорируемый объект КИИ, выходят за пределы территории:</b></p>
                    <ul>
                        <li>(1) городского поселения численностью от 2 000 человек;</li>
                        <li>(2) сельского поселения численностью от 2 000 человек;</li>
                        <li>(3) муниципального района численностью от 2 000 человек;</li>
                        <li>(4) муниципального округа численностью от 2 000 человек;</li>
                        <li>(5) городского округа численностью от 2 000 человек;</li>
                        <li>(б) городского округа с внутригородским делением численностью от 2 000 человек;</li>
                        <li>(7) внутригородского района численностью от человек;</li>
                        <li>(8) внутригородской территории города федерального значения; и не выходят за пределы территории.</li>
                        <li>(1) субъекта Российской Федерации;</li>
                        <li>(2) города федерального значения.</li>
                    </ul>
                </div>

                <div className="calculation-card-2a" onClick={() => handleCard2a({ card: 'I категория' })}>
                    <p><b>Границы территории, на которой возможно нарушение обеспечения
                    жизнедеятельности населения, возникающее в результате совершения
                    компьютерной атаки на категорируемый объект КИИ, расположены в пределах
                    территории:</b></p>
                    <ul>
                        <li>(1) городского поселения численностью от 2 000 человек;</li>
                        <li>(2) сельского поселения численностью от 2 000 человек;</li>
                        <li>(3) муниципального района численностью от 2 000 человек;</li>
                        <li>(4) муниципального округа численностью от 2 000 человек;</li>
                        <li>(5) городского округа численностью от 2 000 человек;</li>
                        <li>(б) городского округа с внутригородским делением численностью от 2 000 человек;</li>
                        <li>(7) внутригородского района численностью от человек;</li>
                        <li>(8) внутригородской территории города федерального значения.</li>
                    </ul>
                </div>

                <div className="calculation-card-2a" onClick={() => handleCard2a({ card: 'Категория отсутсвует' })}>
                    <p><b>Не подходит под данные критерии</b></p>
                </div>
            </div>


            <div className="calculation-card">
                <div className="calculation-card-header">
                    <h3>{`Показатель 3 (2б)`}</h3>
                </div>

                <form onSubmit={calcMark_2}>
                    <h2 style={{ textAlign: 'center', color: 'tomato' }}>{indicator2b_title}</h2>
                    <h2>Показатель №2б = {`(`} {indicator2b.num1 ? indicator2b.num1 : `N уж`} * {indicator2b.num2 ? indicator2b.num2 : `N уз`} {`)`} {`/100`} </h2>

                    <p><i><b>P домохозяйств</b> - средний размер частного домохозяйств, исчисляется в количестве человек (чел.)</i></p>

                    <p><i><b>N домохозяйств</b> - общее количество домохозяйств, обслуживаемое рассматриваемым объектом жизнеобеспечения, на котором возможно нарушение обеспечения жизнедеятельности населения, возникающее в результате совершения компьютерной атаки на категорируемый объкект КИИ, исчисляется в штуках (шт.)</i></p>
                    <div className='form-group'>
                        <label htmlFor="num1">P домохозяйств</label>
                        <input
                            name='num1'
                            value={inputs.num1}
                            type='text'
                            id='num1'
                            autoComplete="off"
                            placeholder="N уж"
                            onChange={(e) => handleIndicator2b({ ...indicator2b, num1: e.target.value })} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="num2">N домохоозяйств</label>
                        <input
                            name='num2'
                            value={inputs.num2}
                            type='text'
                            id='num2'
                            autoComplete="off"
                            placeholder="N уз"
                            onChange={(e) => handleIndicator2b({ ...indicator2b, num2: e.target.value })} />
                    </div>
                    <div className="calculation-card-footer">
                        <button type="submit">
                            Вычислить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}