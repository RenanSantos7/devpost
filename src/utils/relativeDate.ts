import { differenceInMinutes, differenceInSeconds, format } from 'date-fns';

/**
 * Retorna uma data relativa ao momento atual em formato legível.
 *
 * @param {Date | string} date - A data no formato ISO 8601 ou outro formato reconhecível pelo construtor `Date`.
 * @returns {string} Uma string representando o tempo decorrido desde a data fornecida até o momento atual.
 *
 * - Retorna "agora mesmo" se a diferença for menor que 30 segundos.
 * - Retorna "há poucos segundos" se a diferença for menor que 1 minuto.
 * - Retorna "há X minutos" se a diferença for menor que 1 hora.
 * - Retorna "há X horas" se a diferença for menor que 24 horas.
 * - Retorna a data formatada como "dd/MM/yyyy" para diferenças maiores que 24 horas.
 */
export default function relativeDate(date: Date | string): string {
	if (!date) return '';

	const parsedDate = date instanceof Date ? date : new Date(date);

	const now = new Date();
	const minutesDiff = differenceInMinutes(now, parsedDate);
	const secondsDiff = differenceInSeconds(now, parsedDate);

	if (secondsDiff < 30) {
		return 'agora mesmo';
	}

	if (minutesDiff < 1) {
		return 'há poucos segundos';
	}

	if (minutesDiff < 60) {
		return `há ${minutesDiff} minutos`;
	}

	if (minutesDiff < 1440) {
		// 1440 minutos = 24 horas
		return `há ${Math.floor(minutesDiff / 60)} horas`;
	}

	return format(parsedDate, 'dd/MM/yyyy');
}
