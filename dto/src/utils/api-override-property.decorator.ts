export function ApiOverrideProperty(options: Record<string, unknown> = {}) {
	return function(target: object, propertyKey: string) {
		// const isServer = typeof globalThis.window === 'undefined'

		// Перевірка на серверне оточення (Next.js SSR)
		if (process.env.NEXT_RUNTIME !== 'nodejs') {

			return // Ігноруємо декоратор у браузері
		}
		// if (!isServer) {
		// 	return
		// }
		// if(globalThis.window) {
		// 	return
		// }


		// Prevent Error to Webpack Hot Loader
		if (<unknown>process.env.FAST_REFRESH !== true) {
			const applyDecorator = async () => {
				try {
					// const { ApiProperty } = await import('@nestjs/swagger')

					// ApiProperty(options)(target, propertyKey)
				} catch (error) {
					throw new Error(error)
				}
			}

			applyDecorator()
		}
	}
}
// export function ApiOverrideProperty(options: Record<string, unknown> = {}) {
// 	// Перевіряємо, чи це браузер
// 	if (typeof globalThis.window !== 'undefined') {
// 		return () => {} // Повертаємо пусту функцію
// 	}
//
// 	return function(target: object, propertyKey: string) {
// 		if (process.env.FAST_REFRESH !== 'true') {
// 			import('@nestjs/swagger')
// 				.then(({ ApiProperty }) => ApiProperty(options)(target, propertyKey))
// 				.catch(() => {})
// 		}
// 	}
// }
